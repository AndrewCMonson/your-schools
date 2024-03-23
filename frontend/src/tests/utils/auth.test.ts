import { getToken, loggedIn, isTokenExpired, login, logout, isAuthenticated } from "../../utils/auth";
import { describe, expect, it } from "vitest";
import { jwtDecode as decode } from "jwt-decode";

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

describe("isTokenExpired", () => {
  it("should return false if token is not set", () => {
    expect(isTokenExpired("")).toBe(false);
  });
});

describe("isTokenExpired", () => {
  it("should check if token is expired", () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzIwNzQ4MzYsImlhdCI6MTYzMjA3NDgzNiwiaXNzIjoiYXV0aCIsInN1YiI6InVzZXIifQ.7"
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
