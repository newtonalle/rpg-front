<template>
  <div>
    <h1>Map</h1>
    <flowy :nodes="nodes" />
  </div>
</template>

<script>
export default {
  data: () => ({
    nodes: [
      {
        id: "1",
        parentId: -1,
        nodeComponent: "map-node",
        data: {
          title: "Parent Block",
        },
      },
      {
        id: "2",
        parentId: "1",
        nodeComponent: "map-node",
        data: {
          title: "Child Block",
        },
      },
      {
        id: "3",
        parentId: "1",
        nodeComponent: "map-node",
        data: {
          title: "Child Block",
        },
      },
    ],
  }),
};
</script>