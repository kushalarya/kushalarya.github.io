import React from "react";
import Layout from "@theme/Layout";

import PhotoAlbum from "react-photo-album";

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 800,
    height: 600,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 800,
    height: 799,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 600,
    height: 799,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 600,
    height: 799,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];

const title = "My Photo Album";
const description = "All photos with Sony ZV-E10";

export default function Photos() {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <PhotoAlbum layout="rows" photos={photos} />
      </main>
    </Layout>
  );
}
