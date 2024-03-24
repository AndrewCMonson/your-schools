import { getToken, loggedIn, isTokenExpired, login, logout, isAuthenticated } from "../../utils/auth";
import { describe, expect, it } from "vitest";
import  jwt from "jsonwebtoken";

describe("getToken", () => {
  it("should return null if token is not set", () => {
    expect(getToken()).toBeNull();
  });
});

describe("loggedIn", () => {
  it("should return false if token is not set", () => {
    expect(loggedIn()).toBe(false);
  });
});

describe("getToken", () => {
  it("should return token if token is set", () => {
    localStorage.setItem("id_token", "token");
    expect(getToken()).toBe("token");
  });
});

describe("loggedIn", () => {
  it("should return true if token is set and not expired", () => {
    const data = 'data';
    const secret = 'secret123';
    const token = jwt.sign({ data, exp: Math.floor(Date.now() / 1000) + 60 * 60, }, secret);
    localStorage.setItem("id_token", token);
    expect(loggedIn()).toBe(true);
  });
});

describe("isTokenExpired", () => {
  it("should return false if token is not set", () => {
    expect(isTokenExpired("")).toBe(false);
  });
});

describe("isTokenExpired", () => {
  it("should return true if token is expired", () => {
    const data = 'data';
    const secret = 'secret123';
    const token = jwt.sign({ data, exp: Math.floor(Date.now() / 1000) - 60 * 60 }, secret);
    expect(isTokenExpired(token)).toBe(true);
  })
});

describe("login", () => {
  it("should set token in local storage", () => {
    login("token");
    expect(localStorage.getItem("id_token")).toBe("token");
  });
});

describe("logout", () => {
  it("should remove token from local storage", () => {
    logout();
    expect(localStorage.getItem("id_token")).toBeNull();
  });
});

describe("isAuthenticated", () => {
  it("should return false if token is not set", () => {
    expect(isAuthenticated()).toBe(false);
  });
});

describe("isAuthenticated", () => {
  it("should return true if token is set", () => {
    login("token");
    expect(isAuthenticated()).toBe(true);
  });
});