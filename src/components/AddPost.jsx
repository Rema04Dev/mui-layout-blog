import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CssBaseline,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import { useState } from 'react';

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const AddPost = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <Tooltip
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 20,
          left: {
            xs: 'calc(50% - 25px)',
            md: 30,
          },
        }}
      >
        <Fab color="info">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 400,
            height: 260,
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
          width={400}
          height={260}
          bgcolor="white"
          p={3}
          borderRadius={4}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color="gray"
            textAlign="center"
          >
            Create post
          </Typography>
          <UserBox>
            <Avatar
              alt="avatar"
              src="https://images.pexels.com/photos/576494/pexels-photo-576494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography>RemaDev</Typography>
          </UserBox>
          <TextField
            sx={{
              width: '100%',
            }}
            fullWidth
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth>
            <Button variant="contained">Post</Button>
            <Button
              variant="contained"
              color="info"
              sx={{
                width: '100px',
              }}
            >
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
