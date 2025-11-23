"use client";

import React, { useMemo, useState } from "react";
import { longestCommonSubsequence } from "../components/lcs";

export default function Page() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const result = useMemo(() => {
    return longestCommonSubsequence(a, b);
  }, [a, b]);

  return (
    <main className="container">
      <h1>Longest Common Subsequence</h1>
      <p className="subtitle">Type two strings to compute their LCS.</p>
      <section className="inputs">
        <div className="field">
          <label htmlFor="a">String A</label>
          <textarea
            id="a"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Enter first string"
          />
        </div>
        <div className="field">
          <label htmlFor="b">String B</label>
          <textarea
            id="b"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Enter second string"
          />
        </div>
      </section>

      <section className="result">
        <div className="cards">
          <div className="card">
            <div className="card-title">LCS Length</div>
            <div className="card-value">{result.length}</div>
          </div>
          <div className="card">
            <div className="card-title">LCS Sequence</div>
            <div className="card-value seq">{result.sequence || ""}</div>
          </div>
        </div>
      </section>

      <section>
        <h2>DP Table</h2>
        <div className="table-wrapper">
          <table className="dp-table">
            <tbody>
              {result.table.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={`${i}-${j}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer>
        <a
          href="https://en.wikipedia.org/wiki/Longest_common_subsequence" target="_blank" rel="noreferrer"
        >Learn about LCS</a>
      </footer>
    </main>
  );
}
