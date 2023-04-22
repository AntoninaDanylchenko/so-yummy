import { deleteFavoriteOp } from 'redux/favorite/operation'
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Fade from '@mui/material/Fade';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const RecipeCard = ({ id, title, description, preview, time }) => {
    const dispatch = useDispatch();
    const onClick = id => {
        dispatch(deleteFavoriteOp(id));
    };
    return (
        <Card sx={{ display: 'flex', padding: '20px', marginBottom: '50px' }} key={id}>
            <CardMedia
                component="img"
                alt="image recipe"

                image={preview}
                sx={{ maxWidth: '318px', height: "324px", padding: '20px', borderRadius: "8px" }}
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CardContent sx={{
                        // flex: '1 0 auto',
                        padding: '0px'
                    }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography
                            // variant="body2"
                            component="div"
                            color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <Tooltip title="Delete"
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}>

                        <IconButton
                            key={id}
                            onClick={() => onClick(id)}
                            sx={{
                                height: "44px",
                                minWidth: "44px",
                                padding: "0px",
                                marginLeft: "79px",
                                background: "#EBF3D4",
                                borderRadius: "4px",
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                    }}>{time} min</Typography>
                    <Button
                        size="small"
                        sx={{
                            color: "#FAFAFA",
                            background: "#22252A",
                            borderRadius: "24px 44px",
                            minWidth: "160px",
                            height: "54px",
                            padding: "0px",
                            fontFamily: 'Poppins',
                            fontSize: "14px",
                            '&:hover': {
                                color: "#FAFAFA",
                                background: '#8BAA36'
                            },

                        }}
                    >See recipe</Button>
                </Box>
            </Box>
        </Card >
    )
}
export default RecipeCard;