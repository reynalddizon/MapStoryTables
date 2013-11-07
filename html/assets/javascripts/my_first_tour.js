// Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "My Header",
          content: "This is the header of my page.",
          target: "columns",
          placement: "right"
        },
        {
          title: "My content",
          content: "Here is where I put my content.",
          target: "timesetting",
          placement: "bottom"
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);