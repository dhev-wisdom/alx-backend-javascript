export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload])
    .then((res) => res)
    .catch((err) => { console.error(err); });
}
