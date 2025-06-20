import { fetchNewsIndia } from "../lib/fetchNewsIndia";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
  Container,
} from "@mui/material";

export default async function HomePage() {
  let articles = [];

  try {
    articles = await fetchNewsIndia();
  } catch (error) {
    return (
      <Typography color="error">
        Failed to load news: {error.message}
      </Typography>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        📰 Top News from India
        <Button
          variant="outlined"
          component={Link}
          href="/contact/global"
          sx={{
            textTransform: "none",
            fontWeight: 500,
            borderRadius: 2,
            px: 2.5,
            py: 1,
            mt: { xs: 2, sm: 0 },
            ml: "100px",
          }}
        >
          🌍 Back to Global News
        </Button>
      </Typography>

      <Grid container spacing={3}>
        {articles.map((article, idx) => (
          <Grid item key={idx} xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxHeight: 350,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {article.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={article.image}
                  alt={article.title}
                />
              )}
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {article.title.length > 60
                    ? `${article.title.slice(0, 60)}...`
                    : article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description?.slice(0, 70) || "No description."}...
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 1 }}>
                <Button
                  size="small"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
