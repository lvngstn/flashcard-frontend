import { Routes, Route, Outlet } from 'react-router-dom';
import FlashcardViewContainer from './pages/View/Flashcards/FlashcardViewContainer';
import StudyContainer from './pages/Study/StudyContainer';
import EditFlashcardContainer from './pages/View/Edit/EditFlashcardContainer';
import FolderViewContainer from './pages/View/Folder/FolderViewContainer';
import HomeContainer from './pages/Home/HomeContainer';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout><Outlet /></Layout>}>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/view/:folderId/cards" element={<FlashcardViewContainer />} />
        <Route path="/view/:folderId/folders" element={<FolderViewContainer />} />
        <Route path="/edit/:folderId" element={<EditFlashcardContainer />} />
        <Route path="/study/:folderId/:all?" element={<StudyContainer />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;