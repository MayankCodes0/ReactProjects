import { useCallback, useEffect, useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

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
      <div className='w-full max-w-md mx-auto my-16 px-6 py-7
  bg-zinc-900/40 backdrop-blur-xl
  border border-white/10
  shadow-2xl shadow-violet-950/40
  rounded-3xl
  ring-1 ring-inset ring-white/5'>

        <h1 className='text-4xl font-bold text-center
    bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400
    bg-clip-text text-transparent
    mb-8 tracking-tight'>
          Password Generator
        </h1>

        {/* Password Display */}
        <div className='flex overflow-hidden
    rounded-xl
    border border-white/10
    bg-black/30
    backdrop-blur-md
    shadow-inner shadow-black/40
    focus-within:border-violet-500/50
    transition-all duration-300'>

          <input
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef} //this line makes passwordRef refer to input of this tag which is basically our final generated password here
            className='outline-none w-full py-3 px-4
        bg-transparent
        text-zinc-100
        placeholder-zinc-600
        font-mono'
          />

          <button
            onClick={copyToClipboard}
            className='outline-none
        bg-violet-600/90
        hover:bg-violet-500
        active:bg-violet-700
        hover:shadow-lg hover:shadow-violet-600/30
        text-white font-medium
        px-5 py-2
        transition-all duration-200
        shrink-0'>
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className='flex flex-col gap-5 mt-7'>

          {/* Length */}
          <div className='flex items-center gap-x-3
      text-sm text-violet-200'>

            <label
              htmlFor="lengthRange"
              className='font-medium min-w-[90px]'>
              Length <span className='text-violet-400'>({length})</span>
            </label>

            <input
              id="lengthRange"
              type="range"
              value={length}
              min={8}
              max={32}
              className='w-full h-1.5
          bg-zinc-800/80
          rounded-lg
          appearance-none
          cursor-pointer
          accent-violet-500'
              onChange={(e) => setLength(e.target.value)} //here the argument "e" is actually an object, target means the current type i.e. range & value means the value representated by slider
            />
          </div>

          {/* Options */}
          <div className='flex items-center gap-6 pt-2'>

            <label
              htmlFor="numCheckBox"
              className='flex items-center gap-2
          text-sm text-zinc-300
          cursor-pointer select-none
          hover:text-violet-300
          transition-colors duration-200'>

              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numCheckBox"
                onChange={() => setNumAllowed((prev) => !prev)}
                className='w-4 h-4
            accent-violet-600
            cursor-pointer'
              />

              Numbers
            </label>

            <label
              htmlFor="charCheckBox"
              className='flex items-center gap-2
          text-sm text-zinc-300
          cursor-pointer select-none
          hover:text-violet-300
          transition-colors duration-200'>

              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charCheckBox"
                onChange={() => setCharAllowed((prev) => !prev)}
                className='w-4 h-4
            accent-violet-600
            cursor-pointer'
              />

              Characters
            </label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
