export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload])
    .then((res) => res);
}
