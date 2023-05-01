import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Popover, Typography } from '@mui/material';
import { removeIngredientFromShoppingList } from 'redux/shoppingList/operations';
import {
  Item,
  PosterWrapper,
  PosterContainer,
  Poster,
  PosterTitle,
  CloseButton,
  MeasureWrapper,
  Measure,
} from './ListItem.styled';

export default function ListItem(shoppingItem) {
  const dispatch = useDispatch();
  const { ingredient, measure, id } = shoppingItem;
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Item key={id}>
      <PosterWrapper
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <PosterContainer>
          <Poster src={ingredient?.thb} alt={ingredient?.ttl} />
        </PosterContainer>
        <PosterTitle>{ingredient?.ttl}</PosterTitle>
      </PosterWrapper>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{ingredient?.desc}</Typography>
      </Popover>
      <MeasureWrapper>
        {measure ? (
          <Measure>
            {measure[0]} {measure[1]}
          </Measure>
        ) : (
          <Measure></Measure>
        )}
      </MeasureWrapper>
      <CloseButton
        aria-label="delete"
        onClick={() => {
          dispatch(removeIngredientFromShoppingList(id));
        }}
      >
        <CloseIcon color="inherit" fontSize="inherit" />
      </CloseButton>
    </Item>
  );
}
