import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('https://pro-qr-generator.netlify.app/');

    function handleGenerateQrCode(e) {
        e.preventDefault(); // Prevent page reload on form submission
        setQrCode(input);
    }

    return (
        <div className=''>
            <div className='flex-col sm:flex sm:justify-evenly items-center'>
                <div className='p-10 text-center bg-yellow-400'>
                    <h1 className='text-6xl sm:text-9xl font-inter font-bold mt-10'>QR Code Generator</h1>
                    <h1 className='font-inter text-lg mt-5'>
                        Free online static and dynamic QR Code generator for any use case. Create free QR Codes in three simple steps. Make a QR Code, customize it, and track it with a free forever plan.
                    </h1>
                </div>
                <div className='flex w-full justify-evenly items-start'>
                    <form
                        className="flex justify-center items-center w-2/4 mt-10"
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
                    <div className='p-10 -translate-y-10 bg-white rounded-2xl shadow-2xl'>
                        {qrCode && <QRCode id='Qr-code-value' value={qrCode} size={200} bgColor='#fff' />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QRCodeGenerator;
