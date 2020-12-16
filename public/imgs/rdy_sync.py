#!/usr/bin/python
#coding:utf-8

cmdList = [
    "firewall-cmd --set-default-zone=trusted",
    "setenforce 0",
    "rm -rf ~/tool",
    "mkdir -p ~/tool",
    "chmod 777 -R  ~/tool/",
    "rm -rf /etc/rsyncd.conf",
    "echo '[tool]' > /etc/rsyncd.conf",
    "echo 'path = /root/tool'>> /etc/rsyncd.conf",
    "echo 'read only = false'>> /etc/rsyncd.conf",
    "echo 'comment = common util file'>> /etc/rsyncd.conf",
    "echo 'dont compress = *.gz *.bz2 *.tgz *.zip'>> /etc/rsyncd.conf",
    "echo 'auth users = jy'>> /etc/rsyncd.conf",
    "echo 'secrets file = /root/rsyncd_users.db'>> /etc/rsyncd.conf",
    "echo before rm pwd file......",
    "rm -rf  /root/rsyncd_users.db",
    "echo 'jy:123456' > /root/rsyncd_users.db",
    "chmod 600 /root/rsyncd_users.db",
    "systemctl enable  rsyncd",
    "systemctl restart rsyncd",
]


def execute(ssh,util,argv):
    cmd_str=";".join(cmdList)
    rtn = ssh.executeCmd(cmd_str)
    util.cmdout(rtn)





