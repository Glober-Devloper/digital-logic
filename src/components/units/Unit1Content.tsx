import { ChevronDown, ChevronUp } from 'lucide-react';

interface ContentProps {
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}

export default function Unit1Content({ expandedSections, toggleSection }: ContentProps) {
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
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Unit I: Data Representation</h2>

      <Section id="number-systems" title="1. Number Systems">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Binary Number System</h4>
            <p className="text-gray-700 mb-4">
              Base-2 number system using only two digits: 0 and 1. Each position represents a power of 2.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 1: Binary Representation</h5>
              <p className="text-gray-700 mb-2">Convert decimal 25 to binary:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                25 ÷ 2 = 12 remainder 1<br />
                12 ÷ 2 = 6 remainder 0<br />
                6 ÷ 2 = 3 remainder 0<br />
                3 ÷ 2 = 1 remainder 1<br />
                1 ÷ 2 = 0 remainder 1<br />
                <br />
                <strong>Reading from bottom to top: 11001₂</strong>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Octal Number System</h4>
            <p className="text-gray-700 mb-4">
              Base-8 number system using digits 0-7. Each position represents a power of 8.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 2: Decimal to Octal</h5>
              <p className="text-gray-700 mb-2">Convert decimal 156 to octal:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                156 ÷ 8 = 19 remainder 4<br />
                19 ÷ 8 = 2 remainder 3<br />
                2 ÷ 8 = 0 remainder 2<br />
                <br />
                <strong>Result: 234₈</strong>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Hexadecimal Number System</h4>
            <p className="text-gray-700 mb-4">
              Base-16 number system using digits 0-9 and letters A-F (A=10, B=11, C=12, D=13, E=14, F=15).
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 3: Decimal to Hexadecimal</h5>
              <p className="text-gray-700 mb-2">Convert decimal 255 to hexadecimal:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                255 ÷ 16 = 15 remainder 15 (F)<br />
                15 ÷ 16 = 0 remainder 15 (F)<br />
                <br />
                <strong>Result: FF₁₆</strong>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Conversion Table</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">Decimal</th>
                    <th className="border border-gray-300 px-4 py-2">Binary</th>
                    <th className="border border-gray-300 px-4 py-2">Octal</th>
                    <th className="border border-gray-300 px-4 py-2">Hexadecimal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['0', '0000', '0', '0'],
                    ['1', '0001', '1', '1'],
                    ['2', '0010', '2', '2'],
                    ['8', '1000', '10', '8'],
                    ['10', '1010', '12', 'A'],
                    ['15', '1111', '17', 'F'],
                    ['16', '10000', '20', '10'],
                    ['255', '11111111', '377', 'FF'],
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
            </div>
          </div>
        </div>
      </Section>

      <Section id="binary-arithmetic" title="2. Binary Arithmetic">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Binary Addition</h4>
            <p className="text-gray-700 mb-4">Rules: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (0 with carry 1)</p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 4: Binary Addition</h5>
              <p className="text-gray-700 mb-2">Add 1011₂ + 1101₂:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                <pre>
{`    1 1 1  (carries)
    1 0 1 1
  + 1 1 0 1
  ---------
  1 1 0 0 0₂

Verification:
11₁₀ + 13₁₀ = 24₁₀
11000₂ = 24₁₀ ✓`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Binary Subtraction</h4>
            <p className="text-gray-700 mb-4">Rules: 0-0=0, 1-0=1, 1-1=0, 0-1=1 (with borrow)</p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 5: Binary Subtraction</h5>
              <p className="text-gray-700 mb-2">Subtract 1010₂ - 0111₂:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                <pre>
{`    1 0 1 0
  - 0 1 1 1
  ---------
    0 0 1 1₂

Verification:
10₁₀ - 7₁₀ = 3₁₀
0011₂ = 3₁₀ ✓`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Binary Multiplication</h4>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 6: Binary Multiplication</h5>
              <p className="text-gray-700 mb-2">Multiply 101₂ × 11₂:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                <pre>
{`      1 0 1
    ×     1 1
    ---------
      1 0 1
    1 0 1
  ---------
    1 1 1 1₂

Verification:
5₁₀ × 3₁₀ = 15₁₀
1111₂ = 15₁₀ ✓`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Binary Division</h4>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 7: Binary Division</h5>
              <p className="text-gray-700 mb-2">Divide 1100₂ ÷ 11₂:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                <pre>
{`       1 0 0
     --------
  11 | 1 1 0 0
       1 1
       ----
         0 0
         0 0
         ----
           0

Quotient: 100₂ = 4₁₀
Verification: 12₁₀ ÷ 3₁₀ = 4₁₀ ✓`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="fixed-point" title="3. Fixed-Point Number Representation">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Unsigned Integers</h4>
            <p className="text-gray-700 mb-4">
              Represents only positive numbers. An n-bit unsigned integer can represent values from 0 to 2ⁿ-1.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 8: 8-bit Unsigned Integer</h5>
              <div className="bg-white p-4 rounded">
                <p className="mb-2"><strong>Range:</strong> 0 to 255 (2⁸-1)</p>
                <p className="mb-2"><strong>Example:</strong> 10110101₂ = 181₁₀</p>
                <p className="font-mono text-sm">
                  1×2⁷ + 0×2⁶ + 1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰<br />
                  = 128 + 0 + 32 + 16 + 0 + 4 + 0 + 1 = 181
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Sign-Magnitude Representation</h4>
            <p className="text-gray-700 mb-4">
              The most significant bit (MSB) represents the sign (0=positive, 1=negative), remaining bits represent magnitude.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 9: Sign-Magnitude</h5>
              <div className="bg-white p-4 rounded font-mono text-sm">
                +25 = 0 0011001 (8-bit)<br />
                -25 = 1 0011001 (8-bit)<br />
                <br />
                <strong>Range (8-bit):</strong> -127 to +127
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">1's Complement Representation</h4>
            <p className="text-gray-700 mb-4">
              Positive numbers: same as unsigned. Negative numbers: invert all bits.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 10: 1's Complement</h5>
              <div className="bg-white p-4 rounded font-mono text-sm">
                +25 = 00011001 (8-bit)<br />
                -25 = 11100110 (invert all bits)<br />
                <br />
                <strong>Range (8-bit):</strong> -127 to +127
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">2's Complement Representation</h4>
            <p className="text-gray-700 mb-4">
              Positive numbers: same as unsigned. Negative numbers: invert all bits and add 1.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 11: 2's Complement</h5>
              <div className="bg-white p-4 rounded font-mono text-sm">
                <pre>
{`+25 = 00011001 (8-bit)

To get -25:
Step 1: Invert bits:  11100110
Step 2: Add 1:      + 00000001
                    -----------
-25 =                 11100111

Range (8-bit): -128 to +127

Advantage: Only one representation for zero (00000000)`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="floating-point" title="4. Floating-Point Number Representation">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">IEEE 754 Standard</h4>
            <p className="text-gray-700 mb-4">
              Floating-point format: (-1)ˢ × 1.M × 2^(E-bias)
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">32-bit Single Precision</h4>
            <p className="text-gray-700 mb-4">Format: 1 sign bit + 8 exponent bits + 23 mantissa bits</p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 12: Single Precision</h5>
              <p className="text-gray-700 mb-2">Represent -12.375 in 32-bit float:</p>
              <div className="bg-white p-4 rounded font-mono text-sm">
                <pre>
{`Step 1: Convert 12.375 to binary
12 = 1100₂
0.375 = 0.011₂ (0.375 × 2 = 0.75, 0.75 × 2 = 1.5, 0.5 × 2 = 1.0)
12.375 = 1100.011₂

Step 2: Normalize
1100.011₂ = 1.100011₂ × 2³

Step 3: Calculate components
Sign bit (S) = 1 (negative)
Exponent (E) = 3 + 127 (bias) = 130 = 10000010₂
Mantissa (M) = 100011 (23 bits: 10001100000000000000000)

Result: 1 10000010 10001100000000000000000`}
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">64-bit Double Precision</h4>
            <p className="text-gray-700 mb-4">Format: 1 sign bit + 11 exponent bits + 52 mantissa bits</p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 13: Double Precision</h5>
              <div className="bg-white p-4 rounded">
                <p className="mb-2"><strong>Bias:</strong> 1023 (for double precision)</p>
                <p className="mb-2"><strong>Range:</strong> ±1.7 × 10³⁰⁸</p>
                <p className="mb-2"><strong>Precision:</strong> ~15-17 decimal digits</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="character-encoding" title="5. Character Encoding">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">ASCII (American Standard Code for Information Interchange)</h4>
            <p className="text-gray-700 mb-4">7-bit encoding (128 characters): control characters, digits, uppercase, lowercase, symbols.</p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 14: ASCII Codes</h5>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">Character</th>
                      <th className="border border-gray-300 px-4 py-2">Decimal</th>
                      <th className="border border-gray-300 px-4 py-2">Binary</th>
                      <th className="border border-gray-300 px-4 py-2">Hexadecimal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['A', '65', '1000001', '41'],
                      ['Z', '90', '1011010', '5A'],
                      ['a', '97', '1100001', '61'],
                      ['z', '122', '1111010', '7A'],
                      ['0', '48', '0110000', '30'],
                      ['9', '57', '0111001', '39'],
                      ['Space', '32', '0100000', '20'],
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
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Unicode</h4>
            <p className="text-gray-700 mb-4">
              Universal character encoding standard supporting all world languages. Currently covers over 143,000 characters.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 15: Unicode Encoding</h5>
              <div className="bg-white p-4 rounded">
                <p className="mb-2"><strong>UTF-8:</strong> Variable length (1-4 bytes)</p>
                <p className="mb-2 font-mono text-sm">'A' = U+0041 = 41 (1 byte)</p>
                <p className="mb-2 font-mono text-sm">'€' = U+20AC = E2 82 AC (3 bytes)</p>
                <p className="mb-2 font-mono text-sm">'😀' = U+1F600 = F0 9F 98 80 (4 bytes)</p>
                <p className="mt-4"><strong>UTF-16:</strong> 2 or 4 bytes per character</p>
                <p className="mt-4"><strong>UTF-32:</strong> 4 bytes per character (fixed)</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">BCD (Binary Coded Decimal)</h4>
            <p className="text-gray-700 mb-4">Each decimal digit is represented by 4 bits.</p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <h5 className="font-semibold mb-2">Example 16: BCD Encoding</h5>
              <div className="bg-white p-4 rounded font-mono text-sm">
                Decimal: 725<br />
                <br />
                7 → 0111<br />
                2 → 0010<br />
                5 → 0101<br />
                <br />
                BCD: 0111 0010 0101
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">Other Encoding Standards</h4>
            <div className="bg-gray-50 p-4 rounded">
              <p className="mb-2"><strong>EBCDIC:</strong> Extended Binary Coded Decimal Interchange Code (IBM mainframes)</p>
              <p className="mb-2"><strong>ANSI:</strong> American National Standards Institute encoding</p>
              <p className="mb-2"><strong>ISCII:</strong> Indian Script Code for Information Interchange</p>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Number systems form the foundation of digital computing</li>
          <li>• Binary arithmetic follows specific rules for all operations</li>
          <li>• 2's complement is the most widely used signed integer representation</li>
          <li>• IEEE 754 standard defines floating-point representations</li>
          <li>• Character encoding enables text representation in computers</li>
        </ul>
      </div>
    </div>
  );
}
