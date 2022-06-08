const {
  ThemeProvider,
  createTheme
} = MaterialUI;

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

// app goes here
function App() {
  return (
    <div>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
