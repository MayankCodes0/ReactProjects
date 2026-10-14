import { useCallback, useEffect, useRef, useState } from 'react'
import '../../App.css';

function PasswordGeneratorApp() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let num = "0123456789";
    let char = "!@#$%^&*()_";

    if (numAllowed) str += num;
    if (charAllowed) str += char;

    for (let index = 0; index < length; index++) {
      let charElement = Math.floor(Math.random() * str.length);
      pass += str.charAt(charElement);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null);
  console.log(passwordRef)

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <main className="min-h-[calc(100vh-65px)] bg-[#101110] px-5 py-16 text-[#e8e9e4] sm:py-24">

        <div className="mx-auto w-full max-w-2xl">

          {/* Heading */}
          <p className="mb-4 text-xs font-semibold tracking-[2px] text-[#a3b18a]">
            INTERACTIVE PROJECT / 02
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Password <span className="text-[#a3b18a]">Generator.</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#92958b] sm:text-base">
            Generate customizable passwords with adjustable length,
            numbers, and special characters.
          </p>

          {/* Generator Card */}
          <div className="mt-10 rounded border border-[#2c2f2a] bg-[#171916] p-6 sm:p-8">

            <div className="mb-6 flex items-center justify-between border-b border-[#2c2f2a] pb-4">
              <span className="text-xs font-semibold tracking-[1.5px] text-[#92968d]">
                PASSWORD CONFIGURATION
              </span>

              <span className="text-xs text-[#777a71]">
                {length} CHARACTERS
              </span>
            </div>

            {/* Password Display */}
            <div className="flex overflow-hidden rounded border border-[#41443d] bg-[#101110] transition-colors focus-within:border-[#a3b18a]">

              <input
                type="text"
                value={password}
                placeholder='password'
                readOnly
                ref={passwordRef}
                className="w-full min-w-0 bg-transparent px-4 py-3.5 font-mono text-sm text-[#e8e9e4] outline-none placeholder:text-[#65685f]"
              />

              <button
                onClick={copyToClipboard}
                className="shrink-0 border-l border-[#41443d] bg-[#a3b18a] px-5 py-2 text-sm font-semibold text-[#101110] transition-colors hover:bg-[#b4c09d] active:bg-[#899875]"
              >
                Copy
              </button>

            </div>

            {/* Controls */}
            <div className="mt-8 flex flex-col gap-7">

              {/* Length */}
              <div>
                <div className="mb-4 flex items-center justify-between text-sm">
                  <label
                    htmlFor="lengthRange"
                    className="font-medium text-[#d0d1ca]"
                  >
                    Password Length
                  </label>

                  <span className="rounded border border-[#41443d] bg-[#101110] px-3 py-1 font-mono text-sm text-[#a3b18a]">
                    {length}
                  </span>
                </div>

                <input
                  id="lengthRange"
                  type="range"
                  value={length}
                  min={8}
                  max={32}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[#41443d] accent-[#a3b18a]"
                  onChange={(e) => setLength(e.target.value)}
                />

                <div className="mt-2 flex justify-between text-xs text-[#777a71]">
                  <span>8 characters</span>
                  <span>32 characters</span>
                </div>
              </div>

              {/* Options */}
              <div className="border-t border-[#2c2f2a] pt-6">

                <p className="mb-4 text-xs font-semibold tracking-[1.5px] text-[#92968d]">
                  INCLUDE IN PASSWORD
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-4">

                  <label
                    htmlFor="numCheckBox"
                    className="flex cursor-pointer select-none items-center gap-3 text-sm text-[#d0d1ca] transition-colors hover:text-[#a3b18a]"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={numAllowed}
                      id="numCheckBox"
                      onChange={() => setNumAllowed((prev) => !prev)}
                      className="h-4 w-4 cursor-pointer accent-[#a3b18a]"
                    />

                    Numbers
                  </label>

                  <label
                    htmlFor="charCheckBox"
                    className="flex cursor-pointer select-none items-center gap-3 text-sm text-[#d0d1ca] transition-colors hover:text-[#a3b18a]"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={charAllowed}
                      id="charCheckBox"
                      onChange={() => setCharAllowed((prev) => !prev)}
                      className="h-4 w-4 cursor-pointer accent-[#a3b18a]"
                    />

                    Special Characters
                  </label>

                </div>
              </div>

            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 flex flex-wrap justify-between gap-3 text-xs text-[#777a71]">
            <span>Built with React useState & useCallback</span>
            <span>Length: 8–32</span>
          </div>

        </div>
      </main>
    </>
  )
}

export default PasswordGeneratorApp