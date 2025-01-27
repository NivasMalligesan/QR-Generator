import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import BG from '../assets/BG.png';

const QRCodeGenerator = () => {
    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('https://nivas-portfolio-in.netlify.app/');

    function handleGenerateQrCode(e) {
        e.preventDefault();
        setQrCode(input || 'https://nivas-portfolio-in.netlify.app/');
    }

    return (
        <div
            className="flex items-center justify-center backdrop-blur-3xl w-screen h-screen shadow-2xl"
            style={{
                backgroundImage: `url(${BG})`, // Fixed template literal for background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col items-center w-full max-w-4xl mt-10 sm:mt-0 px-4">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        QR Code Generator
                    </h1>
                    <p className="mt-4 text-sm sm:text-lg text-white">
                        Free online static and dynamic QR Code generator for any use case. Create free QR Codes in three simple steps. Make a QR Code, customize it, and track it with a free forever plan.
                    </p>
                </div>

                {/* QR Code and Form Section */}
                <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
                    {/* Input Form */}
                    <div className="w-full sm:w-3/4 mb-6 sm:mb-0 mr-10">
                        <h1 className="mb-4 text-center text-2xl font-bold">
                            Generate Your QR Here
                        </h1>
                        <form className="flex items-center" onSubmit={handleGenerateQrCode}>
                            <input
                                className="border w-full py-2 pl-4 rounded-l-2xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                name="qr-code"
                                placeholder="Enter the link..."
                                value={input}
                            />
                            <button
                                disabled={!input.trim()}
                                type="submit"
                                className="bg-neutral-800 text-white py-2 px-4 rounded-r-2xl hover:bg-neutral-900 transition"
                            >
                                Generate
                            </button>
                        </form>
                        <p className="mt-4 text-gray-600 font-medium text-center">
                            Create your custom QR codes in seconds. Simply enter your link or text, and generate a scannable code to share instantly!
                        </p>
                    </div>

                    {/* QR Code Display */}
                    <div className="flex items-center justify-center w-full sm:w-1/4 lg:w-1/3 p-4 bg-gray-50 rounded-2xl shadow-inner">
                        {qrCode && (
                            <QRCode
                                id="qr-code-canvas"
                                value={qrCode}
                                size={200}
                                bgColor="#fff"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
