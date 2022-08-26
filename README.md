首先要启动私仓
pm2 list
pm2 start verdaccio
地址是： http://localhost:4873/

将 hooks 的包引入到 components 中
lerna add @storybook/hooks packages/components

将@storybook/hooks 这个依赖从 @storybook/components 中删除
pnpm remove @storybook/hooks --filter packages/components

使用命令将包发布到私仓中
lerna publish from-package
