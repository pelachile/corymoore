import "./App.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://https://hzskjeaenrgduiqazdqm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c2tqZWFlbnJnZHVpcWF6ZHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MzIwMDUsImV4cCI6MjAzOTMwODAwNX0.aJvEOXt3pO75HVk08OLkZPy2cqNGVHJHAqAW_iAWyRQ",
);

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    const { data } = await supabase.from("images").select("*");
    setImages(data);
  }
  return (
    <>
      <div className="App">
        <h1>Image Gallery</h1>
        <div className="gallery">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.image_url} alt={image.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
