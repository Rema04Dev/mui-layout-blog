import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar src="https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar src="https://images.pexels.com/photos/35011/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar src="https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar src="https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar src="https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Avatar src="https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={100}
          gap={5}
          sx={{ height: '100px', overflow: 'hidden' }}
        >
          <ImageListItem>
            <img src="https://images.pexels.com/photos/2739286/pexels-photo-2739286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/1075772/pexels-photo-1075772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/35011/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/3852204/pexels-photo-3852204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
