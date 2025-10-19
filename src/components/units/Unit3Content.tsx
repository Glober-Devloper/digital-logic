import { ChevronDown, ChevronUp } from 'lucide-react';

interface ContentProps {
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}

export default function Unit3Content({ expandedSections, toggleSection }: ContentProps) {
  const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {expandedSections.has(id) ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {expandedSections.has(id) && (
        <div className="p-6 bg-white">{children}</div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Unit III: Combinational Circuits and Flip-Flops</h2>

      <Section id="adders" title="1. Adder Circuits">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">Half Adder</h4>
            <p className="text-gray-700 mb-4">
              Adds two single-bit binary numbers. Produces Sum and Carry outputs.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Half Adder Truth Table and Equations</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">A</th>
                      <th className="border border-gray-300 px-4 py-2">B</th>
                      <th className="border border-gray-300 px-4 py-2">Sum (S)</th>
                      <th className="border border-gray-300 px-4 py-2">Carry (C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['0', '0', '0', '0'],
                      ['0', '1', '1', '0'],
                      ['1', '0', '1', '0'],
                      ['1', '1', '0', '1'],
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="border border-gray-300 px-4 py-2 text-center">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="font-mono text-sm">
                  <p><strong>Sum = A ⊕ B</strong> (XOR operation)</p>
                  <p><strong>Carry = A · B</strong> (AND operation)</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 1: Half Adder Implementation</h5>
              <div className="bg-white p-4 rounded">
                <p className="mb-2"><strong>Logic Circuit:</strong></p>
                <p className="text-gray-700 mb-2">
                  Input A and B → XOR Gate → Sum<br />
                  Input A and B → AND Gate → Carry
                </p>
                <p className="mt-3 font-mono text-sm">
                  Example: A=1, B=1<br />
                  Sum = 1 ⊕ 1 = 0<br />
                  Carry = 1 · 1 = 1<br />
                  Result: 10₂ (binary for 2)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">Full Adder</h4>
            <p className="text-gray-700 mb-4">
              Adds three bits: two inputs plus a carry-in. Produces Sum and Carry-out.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Full Adder Truth Table</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">A</th>
                      <th className="border border-gray-300 px-4 py-2">B</th>
                      <th className="border border-gray-300 px-4 py-2">Cin</th>
                      <th className="border border-gray-300 px-4 py-2">Sum</th>
                      <th className="border border-gray-300 px-4 py-2">Cout</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['0', '0', '0', '0', '0'],
                      ['0', '0', '1', '1', '0'],
                      ['0', '1', '0', '1', '0'],
                      ['0', '1', '1', '0', '1'],
                      ['1', '0', '0', '1', '0'],
                      ['1', '0', '1', '0', '1'],
                      ['1', '1', '0', '0', '1'],
                      ['1', '1', '1', '1', '1'],
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="border border-gray-300 px-4 py-2 text-center">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="font-mono text-sm">
                  <p><strong>Sum = A ⊕ B ⊕ Cin</strong></p>
                  <p><strong>Cout = AB + BCin + ACin</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 2: Full Adder Using Half Adders</h5>
              <div className="bg-white p-4 rounded">
                <p className="mb-3"><strong>Implementation:</strong></p>
                <pre className="font-mono text-sm bg-gray-50 p-3 rounded">
{`HA1: Sum1 = A ⊕ B, Carry1 = A · B
HA2: Sum = Sum1 ⊕ Cin, Carry2 = Sum1 · Cin
Cout = Carry1 + Carry2

Example: A=1, B=1, Cin=1
HA1: Sum1 = 1⊕1 = 0, Carry1 = 1·1 = 1
HA2: Sum = 0⊕1 = 1, Carry2 = 0·1 = 0
Cout = 1+0 = 1
Result: Sum=1, Cout=1 (11₂ = 3₁₀)`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">4-bit Parallel Adder</h4>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 3: 4-bit Addition</h5>
              <p className="text-gray-700 mb-2">Add 1011₂ + 0110₂ using parallel adder:</p>
              <div className="bg-white p-4 rounded">
                <pre className="font-mono text-sm">
{`   A3 A2 A1 A0 = 1 0 1 1
 + B3 B2 B1 B0 = 0 1 1 0
   C3 C2 C1 C0 = 0 1 1 0 (carries)
 ─────────────────────────
   S3 S2 S1 S0 = 1 0 0 0 1

Verification: 11₁₀ + 6₁₀ = 17₁₀ = 10001₂ ✓

Bit 0: FA0(1,0,0) → S0=1, C1=0
Bit 1: FA1(1,1,0) → S1=0, C2=1
Bit 2: FA2(0,1,1) → S2=0, C3=1
Bit 3: FA3(1,0,1) → S3=0, C4=1
Result: 10001₂`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">Serial Adder</h4>
            <p className="text-gray-700 mb-4">
              Adds bits one at a time using a single full adder and a flip-flop to store carry.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 4: Serial Addition Process</h5>
              <div className="bg-white p-4 rounded">
                <p className="mb-2"><strong>Advantages:</strong> Less hardware (1 Full Adder)</p>
                <p className="mb-2"><strong>Disadvantages:</strong> Slower (sequential operation)</p>
                <pre className="font-mono text-sm mt-3 bg-gray-50 p-3 rounded">
{`Add 101₂ + 011₂ serially (LSB first):

Clock 1: A0=1, B0=1, Cin=0 → S0=0, Cout=1
Clock 2: A1=0, B1=1, Cin=1 → S1=0, Cout=1
Clock 3: A2=1, B2=0, Cin=1 → S2=0, Cout=1
Clock 4: A3=0, B3=0, Cin=1 → S3=1, Cout=0

Result: 1000₂ (8₁₀)`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="flip-flops" title="2. Flip-Flops">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">SR Flip-Flop (Set-Reset)</h4>
            <p className="text-gray-700 mb-4">
              Basic flip-flop with Set (S) and Reset (R) inputs. Has an invalid state when S=R=1.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">SR Flip-Flop Characteristic Table</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">S</th>
                      <th className="border border-gray-300 px-4 py-2">R</th>
                      <th className="border border-gray-300 px-4 py-2">Q(t+1)</th>
                      <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Q(t)</td>
                      <td className="border border-gray-300 px-4 py-2">No change</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2">Reset</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2">Set</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">X</td>
                      <td className="border border-gray-300 px-4 py-2 text-red-600">Invalid</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-mono text-sm"><strong>Characteristic Equation: Q(t+1) = S + R'Q(t)</strong></p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">D Flip-Flop (Data/Delay)</h4>
            <p className="text-gray-700 mb-4">
              Stores a single bit. Output Q follows input D on clock edge.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">D Flip-Flop Characteristic Table</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">D</th>
                      <th className="border border-gray-300 px-4 py-2">Clock</th>
                      <th className="border border-gray-300 px-4 py-2">Q(t+1)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">↑</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">↑</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-mono text-sm"><strong>Characteristic Equation: Q(t+1) = D</strong></p>
                <p className="text-gray-700 mt-2">Used for data storage, registers, and memory elements.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">JK Flip-Flop</h4>
            <p className="text-gray-700 mb-4">
              Universal flip-flop. Eliminates the invalid state of SR flip-flop. J=K=1 toggles output.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">JK Flip-Flop Characteristic Table</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">J</th>
                      <th className="border border-gray-300 px-4 py-2">K</th>
                      <th className="border border-gray-300 px-4 py-2">Q(t+1)</th>
                      <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Q(t)</td>
                      <td className="border border-gray-300 px-4 py-2">No change</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2">Reset</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2">Set</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">Q'(t)</td>
                      <td className="border border-gray-300 px-4 py-2">Toggle</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-mono text-sm"><strong>Characteristic Equation: Q(t+1) = JQ'(t) + K'Q(t)</strong></p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 5: JK Flip-Flop Operation</h5>
              <div className="bg-white p-4 rounded">
                <pre className="font-mono text-sm">
{`Initial state: Q=0

Clock 1: J=1, K=0 → Q(t+1) = 1 (Set)
Clock 2: J=1, K=1 → Q(t+1) = 0 (Toggle from 1)
Clock 3: J=0, K=0 → Q(t+1) = 0 (No change)
Clock 4: J=1, K=1 → Q(t+1) = 1 (Toggle from 0)
Clock 5: J=0, K=1 → Q(t+1) = 0 (Reset)`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">T Flip-Flop (Toggle)</h4>
            <p className="text-gray-700 mb-4">
              Single input flip-flop. T=1 toggles output, T=0 holds state.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">T Flip-Flop Characteristic Table</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-orange-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">T</th>
                      <th className="border border-gray-300 px-4 py-2">Q(t)</th>
                      <th className="border border-gray-300 px-4 py-2">Q(t+1)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-mono text-sm"><strong>Characteristic Equation: Q(t+1) = T ⊕ Q(t)</strong></p>
                <p className="text-gray-700 mt-2">Commonly used in counters and frequency dividers.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-orange-600 mb-3">Master-Slave JK Flip-Flop</h4>
            <p className="text-gray-700 mb-4">
              Prevents race conditions by using two stages: master latches on clock HIGH, slave updates on clock LOW.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 6: Master-Slave Operation</h5>
              <div className="bg-white p-4 rounded">
                <pre className="font-mono text-sm">
{`Clock HIGH phase:
  - Master captures J and K inputs
  - Slave is isolated and holds previous value

Clock LOW phase:
  - Master output is transferred to Slave
  - New output appears at Q
  - Master is isolated from inputs

Advantage: Eliminates timing problems
Use case: Reliable sequential circuits`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="timing-diagrams" title="3. Timing Diagrams">
        <div className="space-y-6">
          <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">Example 7: D Flip-Flop Timing Diagram</h5>
            <div className="bg-white p-4 rounded">
              <pre className="font-mono text-sm">
{`Time:     t0  t1  t2  t3  t4  t5  t6  t7  t8
Clock:    ┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐
          └───┘   └───┘   └───┘   └───┘   └

D:        ─────┐       ┌───────┐       ┌───
              └───────┘       └───────┘

Q:        ─────────┐       ┌───────────┐
                  └───────┘           └───

Analysis:
- At t1 (rising edge): D=1, so Q becomes 1
- At t3 (rising edge): D=0, so Q becomes 0
- At t5 (rising edge): D=1, so Q becomes 1
- At t7 (rising edge): D=0, so Q becomes 0`}
              </pre>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">Example 8: JK Flip-Flop Timing Diagram</h5>
            <div className="bg-white p-4 rounded">
              <pre className="font-mono text-sm">
{`Time:     t0  t1  t2  t3  t4  t5
Clock:    ┐   ┌───┐   ┌───┐   ┌───┐
          └───┘   └───┘   └───┘   └

J:        ───────┐           ┌───────
                └───────────┘

K:        ┐           ┌───────────┐
          └───────────┘           └───

Q:        ───────────┐   ┌───┐
                    └───┘   └───────

Analysis:
- t0: Q=0 initial
- t1: J=0,K=1 → Q=0 (Reset)
- t2: J=1,K=0 → Q=1 (Set)
- t3: J=1,K=1 → Q=0 (Toggle from 1)
- t4: J=1,K=1 → Q=1 (Toggle from 0)
- t5: J=0,K=1 → Q=0 (Reset)`}
              </pre>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Half adders add two bits; full adders add three bits including carry-in</li>
          <li>• Parallel adders are fast but use more hardware; serial adders are slower but compact</li>
          <li>• Flip-flops are memory elements that store binary state</li>
          <li>• JK flip-flop is universal and can implement any other flip-flop</li>
          <li>• Timing diagrams visualize sequential circuit behavior over time</li>
        </ul>
      </div>
    </div>
  );
}
