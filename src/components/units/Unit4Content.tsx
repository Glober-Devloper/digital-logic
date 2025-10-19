import { ChevronDown, ChevronUp } from 'lucide-react';

interface ContentProps {
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}

export default function Unit4Content({ expandedSections, toggleSection }: ContentProps) {
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
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Unit IV: Digital Components</h2>

      <Section id="integrated-circuits" title="1. Integrated Circuits">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Classification Based on Number of Gates</h4>
            <div className="bg-white p-4 rounded border border-gray-300">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-purple-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">Type</th>
                    <th className="border border-gray-300 px-4 py-2">Gates/Components</th>
                    <th className="border border-gray-300 px-4 py-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">SSI (Small Scale Integration)</td>
                    <td className="border border-gray-300 px-4 py-2">1-10 gates</td>
                    <td className="border border-gray-300 px-4 py-2">Basic logic gates, flip-flops</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-2">MSI (Medium Scale Integration)</td>
                    <td className="border border-gray-300 px-4 py-2">10-100 gates</td>
                    <td className="border border-gray-300 px-4 py-2">Decoders, multiplexers, counters</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">LSI (Large Scale Integration)</td>
                    <td className="border border-gray-300 px-4 py-2">100-10,000 gates</td>
                    <td className="border border-gray-300 px-4 py-2">Microprocessors, memory chips</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-2">VLSI (Very Large Scale Integration)</td>
                    <td className="border border-gray-300 px-4 py-2">10,000-1M gates</td>
                    <td className="border border-gray-300 px-4 py-2">Complex processors, GPUs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">ULSI (Ultra Large Scale Integration)</td>
                    <td className="border border-gray-300 px-4 py-2">&gt;1M gates</td>
                    <td className="border border-gray-300 px-4 py-2">Modern CPUs, SoCs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Classification Based on Circuit Technology</h4>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <div className="bg-white p-4 rounded">
                <p className="mb-2"><strong>TTL (Transistor-Transistor Logic):</strong></p>
                <p className="text-gray-700 mb-3">Uses bipolar junction transistors. Fast switching, moderate power consumption.</p>

                <p className="mb-2"><strong>CMOS (Complementary Metal-Oxide-Semiconductor):</strong></p>
                <p className="text-gray-700 mb-3">Uses both NMOS and PMOS transistors. Low power consumption, high noise immunity.</p>

                <p className="mb-2"><strong>ECL (Emitter-Coupled Logic):</strong></p>
                <p className="text-gray-700">Very fast switching, high power consumption. Used in high-speed applications.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="decoders-encoders" title="2. Decoders and Encoders">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Decoder</h4>
            <p className="text-gray-700 mb-4">
              Converts n-bit binary input to 2ⁿ unique output lines. Only one output is active at a time.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 1: 2-to-4 Decoder</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">A1</th>
                      <th className="border border-gray-300 px-4 py-2">A0</th>
                      <th className="border border-gray-300 px-4 py-2">Y0</th>
                      <th className="border border-gray-300 px-4 py-2">Y1</th>
                      <th className="border border-gray-300 px-4 py-2">Y2</th>
                      <th className="border border-gray-300 px-4 py-2">Y3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['0', '0', '1', '0', '0', '0'],
                      ['0', '1', '0', '1', '0', '0'],
                      ['1', '0', '0', '0', '1', '0'],
                      ['1', '1', '0', '0', '0', '1'],
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
                  <p>Y0 = A1' · A0'</p>
                  <p>Y1 = A1' · A0</p>
                  <p>Y2 = A1 · A0'</p>
                  <p>Y3 = A1 · A0</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 2: 3-to-8 Decoder with Enable</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2">Input: A2 A1 A0 = 101 (5 in decimal), Enable = 1</p>
                <p className="text-gray-700 mb-2">Output: Y5 = 1, all other outputs = 0</p>
                <p className="mt-3"><strong>Applications:</strong></p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Memory address decoding</li>
                  <li>Data demultiplexing</li>
                  <li>BCD to 7-segment display</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Encoder</h4>
            <p className="text-gray-700 mb-4">
              Converts 2ⁿ input lines to n-bit binary output. Opposite operation of decoder.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 3: 4-to-2 Encoder</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">D0</th>
                      <th className="border border-gray-300 px-4 py-2">D1</th>
                      <th className="border border-gray-300 px-4 py-2">D2</th>
                      <th className="border border-gray-300 px-4 py-2">D3</th>
                      <th className="border border-gray-300 px-4 py-2">A1</th>
                      <th className="border border-gray-300 px-4 py-2">A0</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1', '0', '0', '0', '0', '0'],
                      ['0', '1', '0', '0', '0', '1'],
                      ['0', '0', '1', '0', '1', '0'],
                      ['0', '0', '0', '1', '1', '1'],
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
                  <p>A1 = D2 + D3</p>
                  <p>A0 = D1 + D3</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 4: Priority Encoder</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">
                  When multiple inputs are active, priority encoder outputs the highest priority input.
                </p>
                <p className="text-gray-700 mb-2">Input: D3=1, D2=1, D1=0, D0=1</p>
                <p className="text-gray-700">Output: A1 A0 = 11 (priority to D3)</p>
                <p className="mt-3"><strong>Applications:</strong> Interrupt handling, keyboard encoding</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="multiplexers" title="3. Multiplexers and Demultiplexers">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Multiplexer (MUX)</h4>
            <p className="text-gray-700 mb-4">
              Data selector that routes one of many input lines to a single output based on select lines.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 5: 4-to-1 Multiplexer</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">S1</th>
                      <th className="border border-gray-300 px-4 py-2">S0</th>
                      <th className="border border-gray-300 px-4 py-2">Output Y</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['0', '0', 'D0'],
                      ['0', '1', 'D1'],
                      ['1', '0', 'D2'],
                      ['1', '1', 'D3'],
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
                <p className="font-mono text-sm mb-3">
                  Y = S1'S0'D0 + S1'S0D1 + S1S0'D2 + S1S0D3
                </p>
                <p className="text-gray-700">
                  <strong>Example:</strong> If D0=0, D1=1, D2=1, D3=0, and S1S0=01, then Y=D1=1
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 6: Implementing Boolean Functions with MUX</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2">Implement F(A,B,C) = Σ(1,2,4,7) using 8-to-1 MUX:</p>
                <pre className="font-mono text-sm bg-gray-50 p-3 rounded">
{`Connect A, B, C to select lines S2, S1, S0
Set data inputs:
D0 = 0 (minterm 0 not in function)
D1 = 1 (minterm 1 in function)
D2 = 1 (minterm 2 in function)
D3 = 0 (minterm 3 not in function)
D4 = 1 (minterm 4 in function)
D5 = 0 (minterm 5 not in function)
D6 = 0 (minterm 6 not in function)
D7 = 1 (minterm 7 in function)

Result: Y will implement F(A,B,C)`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Demultiplexer (DEMUX)</h4>
            <p className="text-gray-700 mb-4">
              Routes a single input to one of many output lines based on select lines.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 7: 1-to-4 Demultiplexer</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">S1</th>
                      <th className="border border-gray-300 px-4 py-2">S0</th>
                      <th className="border border-gray-300 px-4 py-2">Y0</th>
                      <th className="border border-gray-300 px-4 py-2">Y1</th>
                      <th className="border border-gray-300 px-4 py-2">Y2</th>
                      <th className="border border-gray-300 px-4 py-2">Y3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['0', '0', 'D', '0', '0', '0'],
                      ['0', '1', '0', 'D', '0', '0'],
                      ['1', '0', '0', '0', 'D', '0'],
                      ['1', '1', '0', '0', '0', 'D'],
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
                <p className="text-gray-700">If D=1 and S1S0=10, then Y2=1 and all other outputs=0</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="registers" title="4. Registers and Shift Registers">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Register Modes of Operation</h4>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <div className="bg-white p-4 rounded">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">SISO (Serial In Serial Out)</p>
                    <p className="text-gray-700">Data enters and exits one bit at a time</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">SIPO (Serial In Parallel Out)</p>
                    <p className="text-gray-700">Data enters serially, all bits available simultaneously at output</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">PISO (Parallel In Serial Out)</p>
                    <p className="text-gray-700">All bits loaded simultaneously, output one bit at a time</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">PIPO (Parallel In Parallel Out)</p>
                    <p className="text-gray-700">All bits loaded and read simultaneously</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Shift Registers</h4>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 8: 4-bit SISO Shift Register</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-2">Input sequence: 1011 (MSB first)</p>
                <pre className="font-mono text-sm bg-gray-50 p-3 rounded">
{`Clock  Input  Q3  Q2  Q1  Q0  Output
  0      -     0   0   0   0    0
  1      1     1   0   0   0    0
  2      0     0   1   0   0    0
  3      1     1   0   1   0    0
  4      1     1   1   0   1    1
  5      -     -   1   1   0    0
  6      -     -   -   1   1    1
  7      -     -   -   -   1    1
  8      -     -   -   -   -    1

Complete sequence received after 4 clocks
All data shifted out after 8 clocks`}
                </pre>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 9: Bidirectional Shift Register</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">
                  Can shift data left or right based on control signal.
                </p>
                <pre className="font-mono text-sm bg-gray-50 p-3 rounded">
{`Initial: Q3 Q2 Q1 Q0 = 1010

Shift Right (Mode=0):
Clock 1: 0101 (MSB shifted in 0)
Clock 2: 0010

Shift Left (Mode=1):
Starting from 1010:
Clock 1: 0100 (LSB shifted in 0)
Clock 2: 1000

Applications:
- Multiplication/Division by 2
- Serial-to-parallel conversion
- Data communication`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="counters" title="5. Binary Counters">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Asynchronous Counters (Ripple Counters)</h4>
            <p className="text-gray-700 mb-4">
              Flip-flops are not clocked simultaneously. Output of one flip-flop drives the clock of the next.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 10: 4-bit Ripple Counter</h5>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-purple-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">Clock</th>
                      <th className="border border-gray-300 px-4 py-2">Q3</th>
                      <th className="border border-gray-300 px-4 py-2">Q2</th>
                      <th className="border border-gray-300 px-4 py-2">Q1</th>
                      <th className="border border-gray-300 px-4 py-2">Q0</th>
                      <th className="border border-gray-300 px-4 py-2">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['0', '0', '0', '0', '0', '0'],
                      ['1', '0', '0', '0', '1', '1'],
                      ['2', '0', '0', '1', '0', '2'],
                      ['3', '0', '0', '1', '1', '3'],
                      ['4', '0', '1', '0', '0', '4'],
                      ['5', '0', '1', '0', '1', '5'],
                      ['...', '...', '...', '...', '...', '...'],
                      ['15', '1', '1', '1', '1', '15'],
                      ['16', '0', '0', '0', '0', '0'],
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
                <p className="text-gray-700 mt-3">
                  <strong>Modulus:</strong> 16 (counts from 0 to 15)<br />
                  <strong>Disadvantage:</strong> Propagation delay accumulates (ripple effect)
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 11: Decade Counter (MOD-10)</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">Counts from 0 to 9, then resets to 0</p>
                <pre className="font-mono text-sm bg-gray-50 p-3 rounded">
{`Implementation using 4-bit counter with reset logic:
When count reaches 10 (1010), reset all flip-flops

Detection: Q3·Q1 = 1 (when count = 10)
This signal resets all flip-flops to 0000

Sequence: 0→1→2→3→4→5→6→7→8→9→0→...

Applications:
- Digital clocks
- Frequency dividers (divide by 10)
- BCD counters`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Synchronous Counters</h4>
            <p className="text-gray-700 mb-4">
              All flip-flops are clocked simultaneously. Faster and no ripple delay.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 12: 4-bit Synchronous Up Counter</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">Using JK flip-flops with the following connections:</p>
                <pre className="font-mono text-sm bg-gray-50 p-3 rounded">
{`FF0: J0 = K0 = 1 (always toggles)
FF1: J1 = K1 = Q0
FF2: J2 = K2 = Q0·Q1
FF3: J3 = K3 = Q0·Q1·Q2

Counting sequence (same as ripple):
0000 → 0001 → 0010 → 0011 → ... → 1111 → 0000

Advantages:
- No propagation delay accumulation
- Higher speed operation
- Better for high-frequency applications

Disadvantages:
- More complex logic
- Requires more gates`}
                </pre>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 13: Synchronous Decade Counter</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">Synchronous version of MOD-10 counter:</p>
                <pre className="font-mono text-sm bg-gray-50 p-3 rounded">
{`Modified logic to skip states 10-15:

FF0: J0 = K0 = 1
FF1: J1 = K1 = Q3'·Q0
FF2: J2 = K2 = Q0·Q1
FF3: J3 = Q0·Q1·Q2, K3 = Q0

Truth table shows:
0→1→2→3→4→5→6→7→8→9→0

When count=9 (1001) and clock pulse arrives:
All conditions for reset are met
Counter returns to 0000`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-600 mb-3">Up/Down Counters</h4>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 14: 3-bit Up/Down Counter</h5>
              <div className="bg-white p-4 rounded">
                <p className="text-gray-700 mb-3">Control signal determines count direction:</p>
                <pre className="font-mono text-sm bg-gray-50 p-3 rounded">
{`UP mode (Control=1):
000→001→010→011→100→101→110→111→000

DOWN mode (Control=0):
111→110→101→100→011→010→001→000→111

Implementation:
- Use mode control to select increment/decrement logic
- Synchronous design for better performance

Applications:
- Position tracking
- Event counters (up/down events)
- Bidirectional counting systems`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• ICs are classified by integration level (SSI to ULSI) and circuit technology</li>
          <li>• Decoders convert binary to one-hot, encoders do the reverse</li>
          <li>• Multiplexers select one input, demultiplexers route to one output</li>
          <li>• Registers store data in parallel or serial modes (SISO, SIPO, PISO, PIPO)</li>
          <li>• Asynchronous counters are simple but slow; synchronous counters are fast and complex</li>
        </ul>
      </div>
    </div>
  );
}
