const {
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon
} = MaterialUI;

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1f1f1f',
    },
  },
});

// app goes here
function App() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton>
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6">The Banana Store</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
