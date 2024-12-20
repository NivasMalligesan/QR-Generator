import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import BG from '../assets/BG.png'

const QRCodeGenerator = () => {
    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('https://nivas-portfolio-in.netlify.app/');

    // Handle QR Code generation based on input
    function handleGenerateQrCode(e) {
        e.preventDefault(); // Prevent page reload on form submission
        setQrCode(input); // Set QR code value
    }

    return (
        <div className="flex items-center justify-center backdrop-blur-3xl w-screen h-screen shadow-2xl " style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col items-center w-full max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white">
                        QR Code Generator
                    </h1>
                    <p className="mt-4 text-lg text-white">
                        Free online static and dynamic QR Code generator for any use case. Create free QR Codes in three simple steps. Make a QR Code, customize it, and track it with a free forever plan.
                    </p>
                </div>

                {/* QR Code and Form Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:flex sm:justify-between sm:items-center w-full">
                    <div>
                        <h1 className='mb-8 text-center text-3xl font-bold'>Generate Your QR here</h1>
                        <div className="">
                            <form
                                className="flex items-center"
                                onSubmit={handleGenerateQrCode}
                            >
                                <input
                                    className="border w-full py-2 pl-4 pr-10 rounded-l-2xl border-gray-300 focus:outline-none"
                                    onChange={(e) => setInput(e.target.value)}
                                    type="text"
                                    name="qr-code"
                                    placeholder="Enter the link..."
                                    value={input}
                                />
                                <button
                                    disabled={!input.trim()}
                                    type="submit"
                                    className="bg-neutral-800 text-white py-2 px-4 rounded-r-2xl "
                                >
                                    Generate
                                </button>
                            </form>
                            <div className="mt-6">
                                <p className="text-gray-600 font-medium">
                                    Create your custom QR codes in seconds. Simply enter your link or text, and generate a scannable code to share instantly!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Input Form */}

                    {/* QR Code Display */}
                    <div className="mt-8 sm:mt-0 sm:ml-10 p-6 bg-gray-50 rounded-2xl shadow-xl flex items-center justify-center">
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
