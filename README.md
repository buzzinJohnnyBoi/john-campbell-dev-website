# John Campbell Website

Made with `nuxt`, `tailwind css`.

Hosted on one of my high availability VMs (hosted in the shop), deployed using CI / CD with `github actions`

How the CI / CD works is:
  1) a github actions runner runs the building and testing process.
  2) if the building and testing succeedes, the runner will authenticate to my `pfsense` firewall using a client cert, username and password.  
    note the user is only allowed to access the VM the website is hosted.
  3) the runner will then use a ssh key to login to the deployment VM, pull the latest changes, run the build process and restart the web server.
