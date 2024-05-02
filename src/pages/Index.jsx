// Complete the Index page component here
// Use chakra-ui for styling and layout
import React from "react";
import { Box, Input, Button, VStack, Text, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaSearch, FaDownload, FaPlay, FaPause } from "react-icons/fa";

const Index = () => {
  // State to manage the search input, playing status, and current track
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTrack, setCurrentTrack] = React.useState(null);

  // Dummy data for tracks
  const tracks = [
    { id: 1, name: "Track 1", artist: "Artist 1", url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzE0NjgwNDE2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Track 2", artist: "Artist 2", url: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzE0NjgwNDE2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Track 3", artist: "Artist 3", url: "https://images.unsplash.com/photo-1483032469466-b937c425697b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzE0NjgwNDE2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  // Function to handle search (filter tracks based on query)
  const handleSearch = () => {
    const filteredTracks = tracks.filter((track) => track.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setCurrentTrack(filteredTracks.length > 0 ? filteredTracks[0] : null);
  };

  // Function to toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to download the track
  const downloadTrack = () => {
    if (currentTrack) {
      const link = document.createElement("a");
      link.href = currentTrack.url;
      link.download = `${currentTrack.name}.mp3`; // Assuming the file is in mp3 format
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Text fontSize="2xl" fontWeight="bold">
        Music Player
      </Text>
      <Box width="300px">
        <Input placeholder="Search tracks or artists" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <IconButton aria-label="Search database" icon={<FaSearch />} onClick={handleSearch} />
      </Box>
      {currentTrack && (
        <VStack spacing={3}>
          <Image boxSize="150px" objectFit="cover" src={currentTrack.url} alt="Album cover" />
          <Text fontWeight="semibold">
            {currentTrack.name} - {currentTrack.artist}
          </Text>
          <HStack>
            <IconButton aria-label={isPlaying ? "Pause" : "Play"} icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlay} />
            <IconButton aria-label="Download" icon={<FaDownload />} onClick={downloadTrack} />
          </HStack>
        </VStack>
      )}
    </VStack>
  );
};

export default Index;
