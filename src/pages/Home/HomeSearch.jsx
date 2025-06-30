import { useState } from 'react';

import { useFolders } from '../../hooks/useFolders';
import Button from '../../components/ui/Button';
import SearchIcon from '../../assets/svg/search.svg?react'

function HomeSearch({onFolderSearch}) {
    const [searchQuery, setSearchQuery] = useState('');
    const { searchFolders, getLatestFolders } = useFolders();
    
    const handleSearch = async () => {
        try {
            const folders = (searchQuery === '') ? await getLatestFolders() : await searchFolders(searchQuery);
            onFolderSearch(folders);
        } catch (error) {
            console.error('Error searching folders:', error);
        }
    };
    
    return (
        <div className="flex flex-row gap-2 bg-neutral-800 rounded-lg pl-2 items-center">
            <Button onClick={handleSearch} h="h-5" w="w-5" children={<SearchIcon />} variant="tertiary_icon"/>
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
        </div>
    );
}
export default HomeSearch;