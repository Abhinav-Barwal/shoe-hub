'use client'

import { createContext, useContext, useState, useEffect } from "react";

const FavouriteContext = createContext <
{
    likedId: number[] ;
    handelLike: (id:number) => void;
} | null>(null);

export default function FavouriteProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [likedId, setLikeId] = useState<number[]>([])
    const handelLike = (id: number) => {
       setLikeId(prev => 
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev , id]
        );
    };
    useEffect(() => {
        const stored = localStorage.getItem("liked");
        if (stored) setLikeId(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem("liked", JSON.stringify(likedId));
    }, [likedId]);
    return (
        <>
        <FavouriteContext.Provider value={{likedId, handelLike}}>
            {children}
        </FavouriteContext.Provider>
        </>
    )
}

export function useFavourite() {
    const context = useContext(FavouriteContext);
    if(!context) {
        throw new Error('useFavourite must be used within FavouriteProvider');
    }
    return context;
}