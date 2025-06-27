import React from 'react';
import FolderIcon from './FolderIcon';
import { Link } from 'react-router-dom';

function FolderIconContainer({folders}) {
    if (!folders || folders.length === 0) {
        return <div className="text-neutral-400">No folders found. Create one to get started!</div>;
    }

    return (
        <div className="flex flex-row gap-8 flex-wrap">
            {folders.map((folder) => (
                <Link key={folder.id} to={`/view/${folder.id}/cards`}>
                    <FolderIcon folder={folder}/>
                </Link>
            ))}
        </div>
    );
}
export default FolderIconContainer;