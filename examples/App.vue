<template>
  <div id="app">
    <h2 style="text-align: center;">vue-virtual-tree</h2>
    <div class="box">
      <div class="item item1">
        <virtual-tree
          :option='option'
          :tree="treeData"
          @node-click="nodeClick"
        >
          <template v-slot="{ item }">
            <div>{{item.label}}</div>
          </template>
        </virtual-tree>
      </div>
      <div class="item item2">

      </div>
      <div class="item item3">

      </div>
      <div class="item item4">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      option: {
        itemHeight: 25
      },
      treeData: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 11,
          label: '二级 1-1',
          children: [{
            id: 111,
            label: '三级 1-1-1'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 21,
          label: '二级 2-1',
          children: [{
            id: 211,
            label: '三级 2-1-1'
          }]
        }, {
          id: 22,
          label: '二级 2-2',
          children: [{
            id: 221,
            label: '三级 2-2-1'
          }]
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 31,
          label: '二级 3-1',
          children: [{
            id: 331,
            label: '三级 3-1-1'
          }]
        }, {
          id: 32,
          label: '二级 3-2',
          children: [{
            id: 321,
            label: '三级 3-2-1'
          }]
        }]
      }]
    }
  },
  methods: {
    nodeClick () {}
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, html, #app {
  height: 100%;
  width: 100%;
}
#app {
  padding: 50px;
}
.box {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 50%;
  height: 50%;
  overflow: auto;
}
.item1, .item2 {
  border-bottom: 1px solid #ccc;
}
.item1, .item3 {
  border-right: 1px solid #ccc;
}
</style>
