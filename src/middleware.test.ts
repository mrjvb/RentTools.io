import { describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
vi.mock("@/lib/logger", () => ({ log: vi.fn() }));
import { middleware } from "./middleware";

describe("public social image", () => {
  it("allows anonymous image fetches including Next cache query strings", async () => {
    const response = await middleware(new NextRequest("https://renttools.io/opengraph-image?version=preview"));
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("x-middleware-next")).toBe("1");
  });

  it("keeps private routes protected", async () => {
    const response = await middleware(new NextRequest("https://renttools.io/dashboard"));
    expect(response.headers.get("location")).toContain("/login");
  });
});

describe("legal pages locale routing", () => {
  it.each(["/nl/privacy", "/nl/terms"])("serves %s as a localized rewrite", async (path) => {
    const response = await middleware(new NextRequest(`https://renttools.io${path}`));
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("x-middleware-rewrite")).toContain(path.slice(3));
  });

  it.each(["/de/privacy", "/ru/terms", "/es/privacy", "/fr/terms"])("redirects %s to the English legal page", async (path) => {
    const response = await middleware(new NextRequest(`https://renttools.io${path}`));
    expect(new URL(response.headers.get("location")!).pathname).toBe(path.slice(3));
  });

  it("sends an NL-cookie visitor from /privacy to /nl/privacy but leaves other locales on /privacy", async () => {
    const nl = await middleware(new NextRequest("https://renttools.io/privacy", { headers: { cookie: "rt-locale=nl" } }));
    expect(new URL(nl.headers.get("location")!).pathname).toBe("/nl/privacy");
    const de = await middleware(new NextRequest("https://renttools.io/privacy", { headers: { cookie: "rt-locale=de" } }));
    expect(de.headers.get("location")).toBeNull();
  });
});
