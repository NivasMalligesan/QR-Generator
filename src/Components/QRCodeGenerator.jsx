import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('https://www.example.com');

    function handleGenerateQrCode(e) {
        e.preventDefault(); // Prevent page reload on form submission
        setQrCode(input);
    }

    return (
        <div className=' bg-yellow-400'>
        <div className='flex justify-evenly items-center'>
            <div>

            <h1 className='text-9xl font-inter font-bold '>QR Code <br/> Generator</h1>
            <form
                    className="flex justify-center items-center w-full mt-10"
                    onSubmit={handleGenerateQrCode}
                >
                    <input
                        className="border w-full py-2 pl-3 pr-10 rounded-l-2xl"
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        name="qr-code"
                        placeholder="Enter the link..."
                        value={input}
                    />
                    <button
                        disabled={!input.trim()}
                        type="submit"
                        className="border py-2 px-3 rounded-e-2xl"
                    >
                        Generate
                    </button>
            </form>
            </div>
            <div className='p-10 bg-white'>
                {qrCode && <QRCode id='Qr-code-value' value={qrCode} size={200} bgColor='#fff' />}
            </div>
        </div>
        </div>
    )
}

export default QRCodeGenerator