var tl = anime.timeline({});

// Add children
tl.add(
  {
    targets: ".animation .btn1",
    translateY: [
      {
        value: 30,
        duration: 1000,
        easing: "easeInOutBack",
      },
    ],
    //   translateX: [
    //     {
    //       value: 0,
    //       duration: 0,
    //     },
    //   ],
  },
  "-=600"
)
  .add(
    {
      targets: ".animation .btn2",
      translateY: [
        {
          value: 30,
          duration: 1000,
          easing: "easeInOutBack",
        },
      ],
    },
    "-=600"
  )
  .add(
    {
      targets: ".animation .btn3",
      translateY: [
        {
          value: 30,
          duration: 1000,
          easing: "easeInOutBack",
        },
      ],
    },
    "-=600"
  )
  .add(
    {
      targets: ".animation .btn4",
      translateY: [
        {
          value: 30,
          duration: 1000,
          easing: "easeInOutBack",
        },
      ],
    },
    "-=600"
  )
  .add(
    {
      targets: ".animation .btn1",
      translateY: [
        {
          value: 30,
          duration: 1000,
          easing: "easeInOutBack",
        },
      ],
    },
    "-=600"
  );
