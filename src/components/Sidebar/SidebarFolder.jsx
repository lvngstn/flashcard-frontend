import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useFlashcards } from '../../hooks/useFlashcards';
import { useFolders } from '../../hooks/useFolders';

import Button from "../ui/Button";
import PageLink from '../ui/PageLink';

import ChevronDownIcon from "../../assets/svg/chevron-down.svg?react";
import ChevronRightIcon from "../../assets/svg/chevron-right.svg?react";
import EditIcon from '../../assets/svg/edit-01.svg?react';

export default function SidebarFolder({folder, collapse}) {
  const [isClicked, setClicked] = useState(collapse);
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
        <Button h="h-5" w="w-5" onClick={handleClick} children={isClicked ? <ChevronDownIcon/> : <ChevronRightIcon/>} variant="tertiary_icon" />
        <Link className="w-full overflow-hidden" to={`/view/${folder.id}/cards`}>
          <span className="font-normal text-sm text-neutral-50 truncate block pr-2">{folder.name}</span>
        </Link>

        <PageLink to={`/edit/${folder.id}`} h="h-4" w="w-4" children={<EditIcon />} variant="tertiary_icon" />
      </div>


      {isClicked && (
        <div className="flex flex-col pl-2">
          {subfolders.map((subfolder) => (
            <SidebarFolder key={subfolder.id} folder={subfolder} collapse={collapse}/>
          ))}
        </div>
      )}
    </div>
  );
}
