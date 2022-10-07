import * as React from 'react';
import { ImageListItemBar, ImageList, ImageListItem, Box, useTheme, useMediaQuery } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Art = () => {
  const theme = useTheme();

  const match = useMediaQuery(theme.breakpoints.up('sm'));

  if (match === true) {
    return (
      <Box
        marginX={12}>
      <ImageList
        variant="quilted"
        rowHeight={121}
        cols={6}
      >
        {list.map((item, index) => (
          <>
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
            title={item.title}
            ></ImageListItemBar>
          </ImageListItem>
  
          </>
        ))}
      </ImageList>
      </Box>
    );
  }
  else {
    return (
      <Box
        marginX={12}>
      <ImageList
        variant="quilted"
        rowHeight={121}
        cols={2}
      >
        {list.map((item) => (
          <>
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
            title={item.title}
            ></ImageListItemBar>
          </ImageListItem>
  
          </>
        ))}
      </ImageList>
      </Box>
    );
  }


}

const list = [
  {
    key: 1,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/de3y5bg-1c34cca7-5377-4b13-acaa-b4b490557263.png/v1/fill/w_1024,h_683,q_80,strp/all_out_attack_shen_by_ten_gou_de3y5bg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGUzeTViZy0xYzM0Y2NhNy01Mzc3LTRiMTMtYWNhYS1iNGI0OTA1NTcyNjMucG5nIiwiaGVpZ2h0IjoiPD02ODMiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.B0_lqHurT5XuVDdm337jOMXKw3IctusdKgRQmUq1L7U',
    title: 'All Out Attack Shen',
    rows: 3,
    cols: 2,
  },
  {
    key: 2,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/de3cg5u-489af103-d2a8-4f90-9d46-fda7b902437d.png/v1/fill/w_1024,h_576,q_80,strp/spirit_blossom_kindred__league_of_legends__by_ten_gou_de3cg5u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGUzY2c1dS00ODlhZjEwMy1kMmE4LTRmOTAtOWQ0Ni1mZGE3YjkwMjQzN2QucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0._kWQjQKE26iQWsuyWaa4iRjYdkPjlECm1GM1gRFEg9A',
    title: 'Spirit Blossom Kindred',
    rows: 2,
    cols: 1,
  },
  {
    key: 3,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/denkzpu-af35d1fa-d89f-4734-b4bb-4306891af6aa.png/v1/fill/w_1024,h_683,q_80,strp/practice_work_by_ten_gou_denkzpu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGVua3pwdS1hZjM1ZDFmYS1kODlmLTQ3MzQtYjRiYi00MzA2ODkxYWY2YWEucG5nIiwiaGVpZ2h0IjoiPD02ODMiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.ZGfRSa6aqfnYrE9Ea9uhIXCe89bkPkHjgh2WTN39IUA',
    title: 'Style Practice',
    rows: 2
  },
  {
    key: 4,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/df1acvr-306a0062-d676-4abb-a818-5bc3c569ff97.png/v1/fill/w_1024,h_512,q_80,strp/a_by_ten_gou_df1acvr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGYxYWN2ci0zMDZhMDA2Mi1kNjc2LTRhYmItYTgxOC01YmMzYzU2OWZmOTcucG5nIiwiaGVpZ2h0IjoiPD01MTIiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.S0XAVhfw11Oglc6aANCnMo9bkfvUE2jY3BofU4QGj7A',
    title: 'Desert Rest',
    rows: 2,
    cols: 2,
  },
  {
    key: 5,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/ddetwa3-61ba8f53-39c6-4b6d-9fa0-52cc1bb0eeac.png/v1/fill/w_1024,h_683,q_80,strp/jinx_all_out_attack__league_of_legends__by_ten_gou_ddetwa3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvM2FjZTAyMWYtNDU1YS00MWRiLWIwNDEtYzYzNDFhZmJmOWI5XC9kZGV0d2EzLTYxYmE4ZjUzLTM5YzYtNGI2ZC05ZmEwLTUyY2MxYmIwZWVhYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JcyfnlEoXqHVdGNenTyD9n0Sa8ebfRCWmWhXWJR8AQI',
    title: 'All Out Attack Jinx',
    rows: 2,
    cols: 2,
  },
  {
    key: 6,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/dfcht9d-bc4e9226-0057-45d9-82c8-20b2fd24fa6a.png/v1/fill/w_1024,h_1326,q_80,strp/selen_tatsuki_by_ten_gou_dfcht9d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGZjaHQ5ZC1iYzRlOTIyNi0wMDU3LTQ1ZDktODJjOC0yMGIyZmQyNGZhNmEucG5nIiwiaGVpZ2h0IjoiPD0xMzI2Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvM2FjZTAyMWYtNDU1YS00MWRiLWIwNDEtYzYzNDFhZmJmOWI5XC90ZW4tZ291LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.oROetY_LCM7hywdOifru5Zozo8tHg3cUyS83lO8qYxY',
    title: 'Selen Tatsuki',
    rows: 3,
    cols: 1,
  },
  {
    key: 7,
    img: 'https://pbs.twimg.com/media/FAqDcffVgAQNG4C?format=jpg&name=large',
    title: 'Kijin',
    rows: 3,
    cols: 1,
  },
  {
    key: 8,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/dewunkz-53ebb9c6-8a0b-49aa-9c56-ba63ba93d05b.png/v1/fill/w_1024,h_683,q_80,strp/all_out_attack_nunu__willump_by_ten_gou_dewunkz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGV3dW5rei01M2ViYjljNi04YTBiLTQ5YWEtOWM1Ni1iYTYzYmE5M2QwNWIucG5nIiwiaGVpZ2h0IjoiPD02ODMiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.rJyxweCjZpbi6R6qXAZ64OewMMEyw72htrVHXSzdSOA',
    title: 'All Out Attack Nunu & Willump',
    rows: 2,
    cols: 2,
  },
  {
    key: 9,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/de3nhsi-f2bee6b3-356c-4c55-a0b7-c64484dcf337.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGUzbmhzaS1mMmJlZTZiMy0zNTZjLTRjNTUtYTBiNy1jNjQ0ODRkY2YzMzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XQBJOShF-OOvSpPj_ryoG6FfTZ07yY-yPd16IrigVSY',
    title: 'Nios',
    rows: 2,
    cols: 1,
  },
  {
    key: 10,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/detfmuh-e480a695-a585-4826-b48f-a095ba19cd9b.png/v1/fill/w_1024,h_576,q_80,strp/battle_academy_corina_veraza_by_ten_gou_detfmuh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGV0Zm11aC1lNDgwYTY5NS1hNTg1LTQ4MjYtYjQ4Zi1hMDk1YmExOWNkOWIucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.KaiNSakwe89dL-3ke9Lzb6ryiJI7o7IEjRa0a4Zo-go',
    title: 'Corina Veraza',
    rows: 1,
    cols: 1,
  },
  {
    key: 11,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/denf4j1-0ed3e837-3a4c-46ba-8057-63541dd99f26.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGVuZjRqMS0wZWQzZTgzNy0zYTRjLTQ2YmEtODA1Ny02MzU0MWRkOTlmMjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.geJQKKed-n7Q2hZD7yk5QpUAFG1-yYadPic1NUHlQ2E',
    title: "Vshojo's Rendition of the Room",
    rows: 2,
    cols: 1,
  },
  {
    key: 12,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/dehjd5q-1f59f4c8-c2cb-4ce3-9d3e-a5bc90366daf.png/v1/fill/w_1024,h_683,q_80,strp/style_pose_fx_practice_by_ten_gou_dehjd5q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGVoamQ1cS0xZjU5ZjRjOC1jMmNiLTRjZTMtOWQzZS1hNWJjOTAzNjZkYWYucG5nIiwiaGVpZ2h0IjoiPD02ODMiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zYWNlMDIxZi00NTVhLTQxZGItYjA0MS1jNjM0MWFmYmY5YjlcL3Rlbi1nb3UtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.YvwjLuEMKPkiDR0qmFZgDaFAANByll9jcuKew_sB52U',
    title: "Style Practice 2",
    rows: 1,
    cols: 1,
  },
  {
    key: 13,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/ddiy2jp-ade8a8fa-e429-482a-93de-72c2ff7c7467.png/v1/fill/w_1024,h_1536,q_80,strp/commission__melon_from_beastars_by_ten_gou_ddiy2jp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGRpeTJqcC1hZGU4YThmYS1lNDI5LTQ4MmEtOTNkZS03MmMyZmY3Yzc0NjcucG5nIiwiaGVpZ2h0IjoiPD0xNTM2Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvM2FjZTAyMWYtNDU1YS00MWRiLWIwNDEtYzYzNDFhZmJmOWI5XC90ZW4tZ291LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.c7tn8Z9h2bE0dMSGgZWJqRCZOBKnV5zzpBlcL0R39mE',
    title: "Melon from Beastars",
    rows: 2,
    cols: 1,
  },
  {
    key: 14,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ace021f-455a-41db-b041-c6341afbf9b9/dfavzmj-5ad1a22d-4991-42d2-abad-26db09dc1c56.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNhY2UwMjFmLTQ1NWEtNDFkYi1iMDQxLWM2MzQxYWZiZjliOVwvZGZhdnptai01YWQxYTIyZC00OTkxLTQyZDItYWJhZC0yNmRiMDlkYzFjNTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PxFRfUa15THxCZ2yH_vBmLFNuIPPeLRnQkYGuA7W7gU',
    title: "Wines",
    rows: 2,
    cols: 1,
  },
];

export default Art;