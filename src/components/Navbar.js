import React, { useContext } from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import FlightIcon from "@mui/icons-material/Flight";
import LoginIcon from "@mui/icons-material/Login";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";
import { styled } from "@mui/system";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  "&:hover": {
    color: "#1976d2",
  },
});

function Navbar() {
  const localContext = useContext(DataAppContext);
  const { appState, setAppState } = localContext;
  const { username, loginStatus } = appState;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const logoutFn = () => {
    setAppState({
      ...appState,
      loginStatus: false,
      username: "",
    });
    navigate("/");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleNavigateTo = (path) => () => {
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Replace logo with company name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "2.5rem", fontWeight: "bold" }}
        >
          MUSAFIR⛷️
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          <StyledLink to="/flight">
            <Button
              color="inherit"
              startIcon={<FlightIcon />}
              sx={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                backgroundColor: "#FFA500",
                borderRadius: 10,
                padding: "0.5rem 1rem",
                "&:hover": {
                  backgroundColor: "#FF8C00",
                },
              }}
              onClick={handleNavigateTo("/flight")}
            >
              Flights
            </Button>
          </StyledLink>
          <StyledLink to="/hotel">
            <Button
              color="inherit"
              startIcon={<HotelIcon />}
              sx={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                backgroundColor: "#FFA500",
                borderRadius: 10,
                padding: "0.5rem 1rem",
                "&:hover": {
                  backgroundColor: "#FF8C00",
                },
              }}
              onClick={handleNavigateTo("/hotel")}
            >
              Hotels
            </Button>
          </StyledLink>
          <StyledLink to="/train">
            <Button
              color="inherit"
              startIcon={<TrainIcon />}
              sx={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                backgroundColor: "#FFA500",
                borderRadius: 10,
                padding: "0.5rem 1rem",
                "&:hover": {
                  backgroundColor: "#FF8C00",
                },
              }}
              onClick={handleNavigateTo("/train")}
            >
              Trains
            </Button>
          </StyledLink>
        </Box>
        {username ? (
          <div>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar>{username[0]}</Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>{username}</MenuItem>
              <MenuItem onClick={logoutFn}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button
            color="inherit"
            startIcon={<LoginIcon />}
            sx={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              backgroundColor: "#FFA500",
              borderRadius: 10,
              padding: "0.5rem 1rem",
              "&:hover": {
                backgroundColor: "#FF8C00",
              },
            }}
            onClick={handleLoginClick}
          >
            LOGIN
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
