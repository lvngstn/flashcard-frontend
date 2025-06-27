import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import ChevronRightIcon from "../../assets/svg/chevron-right.svg?react";
import ChevronDownIcon from "../../assets/svg/chevron-down.svg?react";
import { useFlashcards } from '../../hooks/useFlashcards';
import { Link } from 'react-router-dom';
import { useFolders } from '../../hooks/useFolders';
import PageLink from '../ui/PageLink';
import MoreIcon from '../../assets/svg/edit-01.svg?react';

export default function SidebarFolder({folder}) {
  const [isClicked, setClicked] = useState(false);
  const { getFlashcards } = useFlashcards();
  const [flashcards, setFlashcards] = useState([]);
  const { getSubfolders } = useFolders();
  const [subfolders, setSubfolders] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const data = await getFlashcards(folder.id, false);
        setFlashcards(data || []);
      } catch (err) {
        console.error('Error fetching flashcards:', err);
      }
    };

    const fetchSubfolders = async () => {
      try {
        const data = await getSubfolders(folder.id);
        setSubfolders(data || []);
      } catch (err) {
        console.error('Error fetching subfolders:', err);
      }
    };

    fetchFlashcards();
    fetchSubfolders();
  }, [folder.id]);

  const handleClick = () => {
    setClicked(!isClicked);
  }

  return (
    <div>
      <div className="flex items-center w-full hover:bg-neutral-800/90 rounded-lg px-2 py-0.5">
        <button onClick={handleClick} />
        <Button h="h-5" w="w-5" onClick={handleClick} children={isClicked ? <ChevronDownIcon/> : <ChevronRightIcon/>} variant="tertiary_icon" />
        <Link className="w-full" to={`/view/${folder.id}/cards`}>
          <span className="font-normal text-sm text-neutral-50 whitespace-nowrap">{folder.name}</span>
        </Link>

        <PageLink to={`/edit/${folder.id}`} h="h-4" w="w-4" children={<MoreIcon />} variant="tertiary_icon" />
      </div>


      {isClicked && (
        <div className="flex flex-col pl-4">
          {/* {flashcards.map((flashcard) => (
            <button key={flashcard.id} className="flex items-center gap-2 w-full hover:bg-neutral-800/90 rounded-lg px-2 py-0.5">
              <span className="font-normal text-sm text-neutral-50">{flashcard.question}</span>
            </button>
          ))} */}
          {subfolders.map((subfolder) => (
            <SidebarFolder key={subfolder.id} folder={subfolder} />
          ))}
        </div>
      )}
    </div>
  );
}
