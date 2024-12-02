import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function Card({ title, description, link, buttonText }) {
    return (
        <div className="p-6 space-y-4 bg-white rounded-lg shadow-md">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
            <Link to={link}>
                <Button>{buttonText}</Button>
            </Link>
        </div>
    );
}
