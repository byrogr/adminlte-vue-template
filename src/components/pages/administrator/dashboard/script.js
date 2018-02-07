import Layout from '@/components/layouts/administrator/Main.vue'
import Box from '@/components/utils/Box.vue'
import Infobox from '@/components/utils/InfoBox.vue'

export default {
  components: {Layout, Box, Infobox},
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    console.log('ready')
  }
}
