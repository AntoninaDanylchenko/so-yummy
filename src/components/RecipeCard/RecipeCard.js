import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteFavoriteOp } from 'redux/favorite/operation';
import { deleteMyRecipesOp } from 'redux/myRecipes/operation';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Fade from '@mui/material/Fade';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { ReactComponent as Delete } from '../../images/icon/delete.svg';
import { useTheme } from '@emotion/react';

const RecipeCard = ({
  _id,
  title,
  description,
  preview,
  time,
  buttonColorBg,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const onClick = _id => {
    dispatch(deleteFavoriteOp(_id));
    dispatch(deleteMyRecipesOp(_id));
  };
  return (
    <li key={_id}>
      <Card
        sx={{
          display: 'flex',
          padding: '20px',
          marginBottom: '50px',
          '@media (min-width: 375px)': {
            flexDirection: 'column',
          },
          '@media (min-width: 768px)': {
            flexDirection: 'row',
          },
        }}
        key={_id}
      >
        <CardMedia
          component="img"
          alt="image recipe"
          image={preview}
          sx={{ maxWidth: '318px', height: '324px', borderRadius: '8px' }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
            flexGrow: '1',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardContent
              sx={{
                // flex: '1 0 auto',
                padding: '0px',
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography
                // variant="body2"
                component="div"
                // color="text.secondary"
              >
                {description}
              </Typography>
            </CardContent>
            <Tooltip
              title="Delete"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <IconButton
                key={_id}
                onClick={() => onClick(_id)}
                sx={{
                  height: '44px',
                  minWidth: '44px',
                  padding: '0px',
                  marginLeft: '79px',
                  background: theme.ligthGreen.seeBtnBg, //'#EBF3D4',
                  borderRadius: '4px',
                }}
              >
                <Delete stroke={theme.accent.iconFollow} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              {time} min
            </Typography>
            <Link to={`/recipe/${_id}`}>
              <Button
                // size="small"
                sx={{
                  color: '#FAFAFA',
                  background: buttonColorBg.bg, //  theme.title.addBtnBg,
                  borderRadius: '24px 44px',
                  minWidth: '160px',
                  height: '54px',
                  padding: '0px',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontWeight: '400',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#FAFAFA',
                    background: buttonColorBg.hover, //theme.accent.seeRecipe,
                  },
                }}
              >
                See recipe
              </Button>
            </Link>
          </Box>
        </Box>
      </Card>
    </li>
  );
};
export default RecipeCard;
