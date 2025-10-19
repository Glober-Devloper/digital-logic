import { ChevronDown, ChevronUp } from 'lucide-react';

interface ContentProps {
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}

export default function Unit2Content({ expandedSections, toggleSection }: ContentProps) {
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
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Unit II: Digital Logic Circuits</h2>

      <Section id="logic-gates" title="1. Logic Gates">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-3">Basic Logic Gates</h4>
            <p className="text-gray-700 mb-4">
              Logic gates are fundamental building blocks of digital circuits. They perform logical operations on binary inputs.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">AND Gate</h5>
            <p className="text-gray-700 mb-3">Output is HIGH only when all inputs are HIGH</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Truth Table:</p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">A</th>
                    <th className="border border-gray-300 px-4 py-2">B</th>
                    <th className="border border-gray-300 px-4 py-2">Y = A · B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0', '0', '0'],
                    ['0', '1', '0'],
                    ['1', '0', '0'],
                    ['1', '1', '1'],
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
              <p className="font-mono text-sm">Boolean Expression: Y = A · B or Y = A AND B</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">OR Gate</h5>
            <p className="text-gray-700 mb-3">Output is HIGH when at least one input is HIGH</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Truth Table:</p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">A</th>
                    <th className="border border-gray-300 px-4 py-2">B</th>
                    <th className="border border-gray-300 px-4 py-2">Y = A + B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0', '0', '0'],
                    ['0', '1', '1'],
                    ['1', '0', '1'],
                    ['1', '1', '1'],
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
              <p className="font-mono text-sm">Boolean Expression: Y = A + B or Y = A OR B</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">NOT Gate (Inverter)</h5>
            <p className="text-gray-700 mb-3">Output is the complement of input</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Truth Table:</p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">A</th>
                    <th className="border border-gray-300 px-4 py-2">Y = A'</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0', '1'],
                    ['1', '0'],
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
              <p className="font-mono text-sm">Boolean Expression: Y = A' or Y = NOT A or Y = Ā</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">NAND Gate (Universal Gate)</h5>
            <p className="text-gray-700 mb-3">Output is LOW only when all inputs are HIGH (Complement of AND)</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Truth Table:</p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">A</th>
                    <th className="border border-gray-300 px-4 py-2">B</th>
                    <th className="border border-gray-300 px-4 py-2">Y = (A·B)'</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0', '0', '1'],
                    ['0', '1', '1'],
                    ['1', '0', '1'],
                    ['1', '1', '0'],
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
              <p className="font-mono text-sm">Boolean Expression: Y = (A · B)' or Y = A NAND B</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">NOR Gate (Universal Gate)</h5>
            <p className="text-gray-700 mb-3">Output is HIGH only when all inputs are LOW (Complement of OR)</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Truth Table:</p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">A</th>
                    <th className="border border-gray-300 px-4 py-2">B</th>
                    <th className="border border-gray-300 px-4 py-2">Y = (A+B)'</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0', '0', '1'],
                    ['0', '1', '0'],
                    ['1', '0', '0'],
                    ['1', '1', '0'],
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
              <p className="font-mono text-sm">Boolean Expression: Y = (A + B)' or Y = A NOR B</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">XOR Gate (Exclusive-OR)</h5>
            <p className="text-gray-700 mb-3">Output is HIGH when inputs are different</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Truth Table:</p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">A</th>
                    <th className="border border-gray-300 px-4 py-2">B</th>
                    <th className="border border-gray-300 px-4 py-2">Y = A ⊕ B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0', '0', '0'],
                    ['0', '1', '1'],
                    ['1', '0', '1'],
                    ['1', '1', '0'],
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
              <p className="font-mono text-sm">Boolean Expression: Y = A ⊕ B = A'B + AB'</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">XNOR Gate (Exclusive-NOR)</h5>
            <p className="text-gray-700 mb-3">Output is HIGH when inputs are same (Complement of XOR)</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Truth Table:</p>
              <table className="min-w-full border-collapse border border-gray-300 mb-3">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">A</th>
                    <th className="border border-gray-300 px-4 py-2">B</th>
                    <th className="border border-gray-300 px-4 py-2">Y = (A⊕B)'</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0', '0', '1'],
                    ['0', '1', '0'],
                    ['1', '0', '0'],
                    ['1', '1', '1'],
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
              <p className="font-mono text-sm">Boolean Expression: Y = (A ⊕ B)' = AB + A'B'</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="boolean-algebra" title="2. Boolean Algebra">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-3">Fundamental Postulates</h4>
            <div className="bg-white p-4 rounded border border-gray-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Identity Laws:</p>
                  <p className="font-mono text-sm">A + 0 = A</p>
                  <p className="font-mono text-sm">A · 1 = A</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Null Laws:</p>
                  <p className="font-mono text-sm">A + 1 = 1</p>
                  <p className="font-mono text-sm">A · 0 = 0</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Idempotent Laws:</p>
                  <p className="font-mono text-sm">A + A = A</p>
                  <p className="font-mono text-sm">A · A = A</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Complement Laws:</p>
                  <p className="font-mono text-sm">A + A' = 1</p>
                  <p className="font-mono text-sm">A · A' = 0</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Involution Law:</p>
                  <p className="font-mono text-sm">(A')' = A</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Commutative Laws:</p>
                  <p className="font-mono text-sm">A + B = B + A</p>
                  <p className="font-mono text-sm">A · B = B · A</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Associative Laws:</p>
                  <p className="font-mono text-sm">A + (B + C) = (A + B) + C</p>
                  <p className="font-mono text-sm">A · (B · C) = (A · B) · C</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Distributive Laws:</p>
                  <p className="font-mono text-sm">A · (B + C) = A·B + A·C</p>
                  <p className="font-mono text-sm">A + (B · C) = (A+B) · (A+C)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">Example 1: Boolean Simplification</h5>
            <p className="text-gray-700 mb-2">Simplify: F = A'BC + ABC + AB'C</p>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <pre>
{`F = A'BC + ABC + AB'C
  = BC(A' + A) + AB'C        [Factoring]
  = BC(1) + AB'C             [A + A' = 1]
  = BC + AB'C                [BC · 1 = BC]
  = C(B + AB')               [Factoring]
  = C(B + A)                 [Absorption: B + AB' = B + A]

Final Answer: F = C(A + B)`}
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">Example 2: De Morgan's Theorem</h5>
            <p className="text-gray-700 mb-3">Two fundamental theorems for complementing expressions:</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">Theorem 1:</p>
              <p className="font-mono text-sm mb-4">(A + B)' = A' · B'</p>
              <p className="font-semibold mb-2">Theorem 2:</p>
              <p className="font-mono text-sm mb-4">(A · B)' = A' + B'</p>
              <p className="font-semibold mb-2">Application: Simplify (A + BC)'</p>
              <div className="font-mono text-sm mt-2">
                <pre>
{`(A + BC)' = A' · (BC)'        [De Morgan's Theorem 1]
          = A' · (B' + C')     [De Morgan's Theorem 2]

Final Answer: A'(B' + C') = A'B' + A'C'`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="simplification" title="3. Boolean Expression Simplification">
        <div className="space-y-6">
          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">Example 3: Using Algebraic Method</h5>
            <p className="text-gray-700 mb-2">Simplify: F = AB + A'C + BC</p>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <pre>
{`F = AB + A'C + BC
  = AB + A'C + BC(A + A')    [Adding A + A' = 1]
  = AB + A'C + ABC + A'BC
  = AB + ABC + A'C + A'BC    [Rearranging]
  = AB(1 + C) + A'C(1 + B)   [Factoring]
  = AB(1) + A'C(1)           [1 + X = 1]
  = AB + A'C

Final Answer: F = AB + A'C
(The term BC is redundant - Consensus Theorem)`}
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">Example 4: K-Map Simplification (3 Variables)</h5>
            <p className="text-gray-700 mb-2">Simplify using K-Map: F(A,B,C) = Σ(0,2,3,5,7)</p>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">K-Map:</p>
              <table className="border-collapse border border-gray-300 mb-3">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">AB\\C</th>
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">0</th>
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">01</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">11</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-100">10</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                  </tr>
                </tbody>
              </table>
              <p className="font-mono text-sm mt-3">
                Group 1 (vertical pair): A'C'<br />
                Group 2 (horizontal pair): AB' + BC<br />
                <br />
                <strong>Final Answer: F = A'C' + B</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="canonical-forms" title="4. Canonical Forms">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-3">Sum of Products (SOP)</h4>
            <p className="text-gray-700 mb-4">
              Standard form where the function is expressed as sum of minterms (product terms).
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 5: SOP Form</h5>
              <p className="text-gray-700 mb-2">Express F(A,B,C) in SOP where F=1 for rows 1,3,5,7:</p>
              <div className="bg-white p-4 rounded">
                <table className="min-w-full border-collapse border border-gray-300 mb-3">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">Row</th>
                      <th className="border border-gray-300 px-4 py-2">A</th>
                      <th className="border border-gray-300 px-4 py-2">B</th>
                      <th className="border border-gray-300 px-4 py-2">C</th>
                      <th className="border border-gray-300 px-4 py-2">F</th>
                      <th className="border border-gray-300 px-4 py-2">Minterm</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">A'B'C</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">3</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">A'BC</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">5</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">AB'C</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2 text-center">7</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center bg-green-200">1</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">ABC</td>
                    </tr>
                  </tbody>
                </table>
                <p className="font-mono text-sm">
                  <strong>SOP Form: F = A'B'C + A'BC + AB'C + ABC</strong><br />
                  <strong>Notation: F = Σ(1,3,5,7)</strong>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-3">Product of Sums (POS)</h4>
            <p className="text-gray-700 mb-4">
              Standard form where the function is expressed as product of maxterms (sum terms).
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 6: POS Form</h5>
              <p className="text-gray-700 mb-2">Express F(A,B,C) in POS where F=0 for rows 0,2,4,6:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                <pre>
{`For F=0 rows, create maxterms:
Row 0 (000): (A + B + C)
Row 2 (010): (A + B' + C)
Row 4 (100): (A' + B + C)
Row 6 (110): (A' + B' + C)

POS Form: F = (A+B+C)(A+B'+C)(A'+B+C)(A'+B'+C)
Notation: F = Π(0,2,4,6)`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
            <h5 className="font-semibold mb-2">Example 7: SOP to POS Conversion</h5>
            <p className="text-gray-700 mb-2">Convert F = Σ(1,3,5,7) to POS form:</p>
            <div className="bg-white p-4 rounded font-mono text-sm">
              <pre>
{`Given: F = Σ(1,3,5,7)
Missing rows (where F=0): 0,2,4,6

Therefore:
F = Π(0,2,4,6)
F = (A+B+C)(A+B'+C)(A'+B+C)(A'+B'+C)`}
              </pre>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Logic gates are fundamental building blocks of digital circuits</li>
          <li>• NAND and NOR gates are universal gates (can implement any logic function)</li>
          <li>• Boolean algebra provides laws for simplifying logic expressions</li>
          <li>• De Morgan's theorems are essential for complementing expressions</li>
          <li>• SOP and POS are two canonical forms for representing Boolean functions</li>
        </ul>
      </div>
    </div>
  );
}
