<script>
export default {
  name: 'GoSteps',
  props: {
    active: {
      type: Number,
      default: 1
    }
  },
  render() {
    // #1 獲取默認插巢的節點
    const items = this.$slots.default()

    // #2 獲取所有動態生成的 GoStepsItem 元件節點
    const dynamicItems = []
    items.forEach((item) => {
      if (item.type.name === 'GoStepsItem') {
        dynamicItems.push(item)
      } else {
        // v-for 遍歷的節點
        item.children.forEach((item) => {
          dynamicItems.push(item)
        })
      }
    })

    // #3 根據動態節點生成 item 的 jsx 物件
    const itemsJsx = dynamicItems.map((item, i) => {
      return (
        <div class={[{ active: i < this.active }, { 'go-steps-item': true }]}>
          <div class="step">
            <span>{i + 1}</span>
          </div>
          <div class="title">{item.props.title}</div>
        </div>
      )
    })

    // #4 插入大容器中
    return <div class="go-steps">{itemsJsx}</div>
  }
}
</script>

<style lang="scss">
.go-steps {
  display: flex;
  text-align: center;
  &-item {
    flex: 1;
    &:first-child {
      .step {
        &::before {
          display: none;
        }
      }
    }
    &:last-child {
      .step {
        &::after {
          display: none;
        }
      }
    }
    &.active {
      .step {
        > span {
          border-color: #27ba9b;
          background: #27ba9b;
          color: #fff;
        }
        &::before,
        &::after {
          background: #27ba9b;
        }
      }
      .title {
        color: #27ba9b;
      }
    }
    .step {
      position: relative;
      > span {
        width: 48px;
        height: 48px;
        font-size: 28px;
        border: 2px solid #e4e4e4;
        background: #fff;
        border-radius: 50%;
        line-height: 44px;
        color: #ccc;
        display: inline-block;
        position: relative;
        z-index: 1;
      }
      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 23px;
        width: 50%;
        height: 2px;
        background: #e4e4e4;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
    .title {
      color: #999;
      padding-top: 12px;
      font-size: 14px;
    }
  }
}
</style>
