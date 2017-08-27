import axios from 'axios'

export const openReport = async reportName => {
  const { data } = await axios.get(`/api/reports/${reportName}`, {
    responseType: 'arraybuffer'
  })

  const blob = new Blob([data], {
    type: 'application/pdf'
  })

  const url = window.URL.createObjectURL(blob)
  window.open(url)
}
