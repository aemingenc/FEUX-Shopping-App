import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Basket from "./Basket";

const Header = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Our name is brand(A.E.G)
          </Typography>
          <Basket />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
