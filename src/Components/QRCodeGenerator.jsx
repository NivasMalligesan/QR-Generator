import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import BG from '../assets/Bg.jpg';

const QRCodeGenerator = () => {
    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('https://pro-qr-generator.netlify.app/');

    // Handle QR Code generation based on input
    function handleGenerateQrCode(e) {
        e.preventDefault(); // Prevent page reload on form submission
        setQrCode(input); // Set QR code value
    }

    // Function to trigger download of the QR code
    function handleDownloadQRCode() {
        const canvas = document.getElementById('qr-code-canvas');
        if (canvas) {
            const imageUrl = canvas.toDataURL('image/png'); // Get the data URL of the canvas
            const a = document.createElement('a');
            a.href = imageUrl;
            a.download = 'qr-code.png'; // Set default filename for download
            a.click(); // Simulate a click to trigger the download
        }
    }

    return (
        <div className="bg-cover bg-center h-[350px]" style={{ backgroundImage: `url(${BG})` }}>
            <div className='flex-col sm:flex justify-center items-center'>
                <div className='p-10 text-center'>
                    <h1 className='text-6xl sm:text-9xl font-inter font-bold mt-10 text-white'>
                        QR Code Generator
                    </h1>
                    <h1 className='font-inter text-lg mt-5 px-10 text-white'>
                        Free online static and dynamic QR Code generator for any use case. Create free QR Codes in three simple steps. Make a QR Code, customize it, and track it with a free forever plan.
                    </h1>
                </div>
                <div className='flex w-full justify-evenly items-start'>
                    <form
                        className="flex justify-center items-center w-2/4 mt-10"
                        onSubmit={handleGenerateQrCode}
                    >
                        <input
                            className="border w-full py-2 pl-3 pr-10 rounded-l-2xl border-slate-950"
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
                        {qrCode && (
                            <QRCode
                                id="qr-code-canvas"
                                value={qrCode}
                                size={200}
                                bgColor='#fff'
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className='w-1/2 ml-44 -translate-y-40'>
                <p className='font-normal text-lg text-gray-600'>
                    Create and download your custom QR codes in seconds. Simply enter your link or text, and generate a scannable code to share instantly!
                </p>
                {/* Download Button */}
                {qrCode && (
                    <button
                        onClick={handleDownloadQRCode}
                        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                    >
                        Download QR Code
                    </button>
                )}
            </div>
        </div>
    );
};

export default QRCodeGenerator;
