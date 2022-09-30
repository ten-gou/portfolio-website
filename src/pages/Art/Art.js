import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Art = () => {
  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {list.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const list = [
  {
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/de3y5bg-1c34cca7-5377-4b13-acaa-b4b490557263.png/v1/fill/w_1024,h_683,q_80,strp/all_out_attack_shen_by_ten_gou_de3y5bg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGUzeTViZy0xYzM0Y2NhNy01Mzc3LTRiMTMtYWNhYS1iNGI0OTA1NTcyNjMucG5nIiwiaGVpZ2h0IjoiPD02ODMiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.B0_lqHurT5XuVDdm337jOMXKw3IctusdKgRQmUq1L7U',
    title: 'All Out Attack Shen',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/de3cg5u-489af103-d2a8-4f90-9d46-fda7b902437d.png/v1/fill/w_1024,h_576,q_80,strp/spirit_blossom_kindred__league_of_legends__by_ten_gou_de3cg5u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGUzY2c1dS00ODlhZjEwMy1kMmE4LTRmOTAtOWQ0Ni1mZGE3YjkwMjQzN2QucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0._kWQjQKE26iQWsuyWaa4iRjYdkPjlECm1GM1gRFEg9A',
    title: 'Spirit Blossom Kindred',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

export default Art;