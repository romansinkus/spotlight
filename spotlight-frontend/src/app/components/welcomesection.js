import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const adjectives = ["the perfect", "an empty", "the ideal", "a quiet", "the best", "a spot-on"];

const WelcomeSection = () => {
    const [currentAdjective, setCurrentAdjective] = useState("perfect");
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timeoutId;

        const typeEffect = () => {
            if (isTyping) {
                if (typedText.length < adjectives[index].length) {
                    setTypedText(adjectives[index].slice(0, typedText.length + 1));
                    timeoutId = setTimeout(typeEffect, 150); // Typing speed
                } else {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000); // Wait a second after typing the full word
                }
            } else if (isDeleting) {
                if (typedText.length > 0) {
                    setTypedText(adjectives[index].slice(0, typedText.length - 1));
                    timeoutId = setTimeout(typeEffect, 100); // Deleting speed
                } else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % adjectives.length);
                    setTimeout(() => {
                        setIsTyping(true);
                    }, 200); // Wait a moment before typing again
                }
            }
        };

        if (!isTyping && !isDeleting) {
            setTimeout(() => setIsTyping(true), 200);
        } else {
            timeoutId = setTimeout(typeEffect, 150); // Start typing when isTyping is true
        }

        return () => clearTimeout(timeoutId);
    }, [typedText, isTyping, isDeleting, index]);

    return (
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center bg-welcome-colour rounded-xl p-8">
            <div className="flex flex-col items-start flex-grow">
                <h1 className="text-4xl font-bold text-black p-4">
                    Instantly find {" "}
                    <span className={`inline-block ${isTyping || isDeleting ? "typing" : ""}`}>
                        {typedText}
                    </span>{" "}
                    spot.
                </h1>
                <h2 className="text-lg text-black p-4 pt-0">
                    Use AI to preview places in real-time before you navigate your daily adventures.
                </h2>
            </div>
            <div className="p-16 rounded-lg sm:p-0 sm:ml-4 mr-4">
                <button className="bg-black text-white py-4 px-8 text-lg rounded-full hover:bg-blue-600">
                    Find your Spot
                    <FaArrowRight className="inline ml-2" />
                </button>
            </div>
        </div>
    );
};

export default WelcomeSection;