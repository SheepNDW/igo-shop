<template>
  <div ref="ArticleModalRef" class="modal fade">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark p-3 text-light">
          <h5 class="modal-title" v-if="isEdit">編輯貼文</h5>
          <h5 class="modal-title" v-else>新增貼文</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="createTime"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col-md-2 mb-1"
                  v-for="(label, key) in tempArticle.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempArticle.tag.splice(key, 1)"
                    >
                      X
                    </button>
                  </div>
                </div>
                <div
                  class="col-md-2 mb-1"
                  v-if="
                    tempArticle.tag[tempArticle.tag.length - 1] ||
                    !tempArticle.tag.length
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempArticle.description"
                  placeholder="請輸入文章描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <CKEditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.content"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
                    是否公開
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            取消編輯
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-article', tempArticle)"
          >
            確定送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useBsModal } from '@/hooks'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import dayjs from 'dayjs'
import MyUploadAdapter from '@/utils/myUploadAdapter'

// 自訂圖片上傳 Plugin
function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader)
  }
}

export default {
  name: 'ArticleModal',
  components: {
    CKEditor: CKEditor.component
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    article: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const ArticleModalRef = ref(null)
    const { openModal, closeModal } = useBsModal(ArticleModalRef)

    // 欲新增 & 修改的文章資料
    const tempArticle = ref({
      tag: ['']
    })
    const createTime = ref(0)

    watch(
      () => props.article,
      () => {
        tempArticle.value = {
          ...props.article,
          tag: props.article.tag || [],
          isPublic: props.article.isPublic || false
        }
        createTime.value = dayjs
          .unix(props.article.create_at)
          .format('YYYY-MM-DD')
      }
    )
    watch(createTime, () => {
      tempArticle.value.create_at = dayjs(createTime.value).unix()
    })

    // CKEditor 配置
    const editor = ClassicEditor
    const editorConfig = {
      toolbar: ['heading', 'bold', 'italic', '|', 'link'],
      extraPlugins: [MyCustomUploadAdapterPlugin]
    }

    return {
      ArticleModalRef,
      openModal,
      closeModal,
      editor,
      editorConfig,
      tempArticle,
      createTime
    }
  }
}
</script>

<style lang="scss">
.ck-editor__editable_inline {
  min-height: 300px;
}
</style>
