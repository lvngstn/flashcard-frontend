import React, { useState } from 'react'
import SearchIcon from '../../assets/svg/search.svg?react'
import Button from '../../components/ui/Button'
import { useFlashcards } from '../../hooks/useFlashcards';

function ViewSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const { searchFlashcards } = useFlashcards();
    
    const handleSearch = async () => {
        try {
            const flashcards = await searchFlashcards(searchQuery);
            onFlashcardSearch(flashcards);
        } catch (error) {
            console.error('Error searching flashcards:', error);
        }
    };
    return (
        <div className="flex flex-row-reverse gap-2 hover:bg-neutral-850 bg-neutral-800 rounded-lg pl-2 pr-64 items-center">
            <input 
                className="h-10 w-full bg-neutral-800 rounded-lg p-2 focus:outline-none text-neutral-300 placeholder:text-neutral-400" 
                value={searchQuery} 
                type="text" 
                placeholder="Search" 
                onChange={(e) => setSearchQuery(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <Button onClick={handleSearch} h="h-5" w="w-5" children={<SearchIcon />} variant="tertiary_icon"/>
        </div>
    );
}
export default ViewSearch;